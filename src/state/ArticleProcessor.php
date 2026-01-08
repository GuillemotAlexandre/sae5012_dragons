<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Article;
use App\Entity\Rating;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class ArticleProcessor implements ProcessorInterface
{
    public function __construct(
        // On utilise #[Autowire] pour pointer précisément vers le service de persistance Doctrine
        #[Autowire(service: 'api_platform.doctrine.orm.state.persist_processor')]
        private ProcessorInterface $persistProcessor,
        private Security $security
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        // On vérifie si l'objet est un Article ou un Rating et s'il n'a pas encore d'auteur
        if (($data instanceof Article || $data instanceof Rating) && !$data->getAuthor()) {
            $user = $this->security->getUser();
            if ($user) {
                $data->setAuthor($user);
            }
        }

        // On délègue la sauvegarde finale au processeur natif de Doctrine
        return $this->persistProcessor->process($data, $operation, $uriVariables, $context);
    }
}