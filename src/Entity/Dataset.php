<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use App\Repository\DatasetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DatasetRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        // Seul le fournisseur (et l'admin par héritage) peut créer, modifier ou supprimer
        new Post(security: "is_granted('ROLE_FOURNISSEUR')"),
        new Patch(security: "is_granted('ROLE_FOURNISSEUR')"),
        new Delete(security: "is_granted('ROLE_FOURNISSEUR')"),
    ]
)]
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

    public function getId(): ?int { return $this->id; }

    public function getName(): ?string { return $this->name; }
    public function setName(string $name): self { $this->name = $name; return $this; }

    public function getSource(): ?string { return $this->source; }
    public function setSource(string $source): self { $this->source = $source; return $this; }

    public function getMetadata(): array { return $this->metadata; }
    public function setMetadata(?array $metadata): self { $this->metadata = $metadata ?? []; return $this; }

    /** @return Collection<int, Visualisation> */
    public function getVisualisations(): Collection { return $this->visualisations; }
}