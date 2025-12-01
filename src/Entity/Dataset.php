<?php

namespace App\Entity;

use App\Repository\DatasetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DatasetRepository::class)]
class Dataset
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $source = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private array $metadata = [];

    #[ORM\OneToMany(mappedBy: 'dataset', targetEntity: Visualisation::class)]
    private Collection $visualisations;

    public function __construct()
    {
        $this->visualisations = new ArrayCollection();
    }

    // Getters & setters...
}
