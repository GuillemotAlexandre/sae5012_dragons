<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Article;
use Symfony\Bundle\SecurityBundle\Security;

class ArticleProcessor implements ProcessorInterface
{
    public function __construct(
        private ProcessorInterface $persistProcessor,
        private Security $security
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        // Si on crée un nouvel article et qu'aucun auteur n'est défini
        if ($data instanceof Article && !$data->getAuthor()) {
            // On récupère l'utilisateur actuellement connecté
            $user = $this->security->getUser();
            $data->setAuthor($user);
        }

        return $this->persistProcessor->process($data, $operation, $uriVariables, $context);
    }
}