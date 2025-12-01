<?php

namespace App\Repository;

use App\Entity\Visualisation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class VisualisationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Visualisation::class);
    }

    // Ici tu peux ajouter tes méthodes custom pour récupérer des Visualisations
}
