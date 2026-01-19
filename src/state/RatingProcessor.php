<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Rating;
use App\Repository\RatingRepository;
use Doctrine\ORM\EntityManagerInterface; // 👈 IMPORTANT
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class RatingProcessor implements ProcessorInterface
{
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.persist_processor')]
        private ProcessorInterface $persistProcessor,
        private Security $security,
        private RatingRepository $ratingRepository,
        private EntityManagerInterface $em // 👈 On injecte l'EntityManager
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        // 1. Assigner l'auteur si manquant
        if ($data instanceof Rating && $data->getAuthor() === null) {
            $user = $this->security->getUser();
            if ($user) {
                $data->setAuthor($user);
            }
        }

        // 2. Sauvegarder la note (Rating) en base
        // Cela permet qu'elle soit prise en compte dans le calcul juste après
        $result = $this->persistProcessor->process($data, $operation, $uriVariables, $context);

        // 3. Mettre à jour la moyenne de l'Article
        if ($data instanceof Rating) {
            $article = $data->getArticle();
            
            // On récupère toutes les notes pour cet article (y compris celle qu'on vient d'ajouter)
            $ratings = $this->ratingRepository->findBy(['article' => $article]);
            
            if (count($ratings) > 0) {
                $total = 0;
                foreach ($ratings as $r) {
                    $total += $r->getValue();
                }
                $average = round($total / count($ratings), 1);
                $article->setAverageRating($average);
            } else {
                $article->setAverageRating(null);
            }

            // 4. SAUVEGARDER L'ARTICLE (Le chaînon manquant !)
            $this->em->persist($article);
            $this->em->flush(); // 👈 On force l'écriture de la moyenne dans la table Article
        }

        return $result;
    }
}