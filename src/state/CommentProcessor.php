<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Comment;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class CommentProcessor implements ProcessorInterface
{
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.persist_processor')]
        private ProcessorInterface $persistProcessor,
        private Security $security
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        // Si c'est un Commentaire et qu'il n'a pas encore d'auteur...
        if ($data instanceof Comment && $data->getAuthor() === null) {
            $user = $this->security->getUser();
            // ... on lui assigne l'utilisateur connecté
            if ($user) {
                $data->setAuthor($user);
            }
        }

        // On laisse API Platform faire la suite (sauvegarde en BDD)
        return $this->persistProcessor->process($data, $operation, $uriVariables, $context);
    }
}