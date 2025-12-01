<?php

namespace App\Entity;

use App\Repository\VisualisationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VisualisationRepository::class)]
class Visualisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 50)]
    private ?string $chartType = null;

    #[ORM\ManyToOne(targetEntity: Dataset::class, inversedBy: 'visualisations')]
    private ?Dataset $dataset = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private array $variables = [];

    #[ORM\Column(type: 'json', nullable: true)]
    private array $colors = [];

    #[ORM\OneToOne(targetEntity: Bloc::class, inversedBy: 'visualisation')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Bloc $bloc = null;

    // Getters & setters...
}
