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
use Symfony\Component\Serializer\Annotation\Groups; // Import important

#[ORM\Entity(repositoryClass: DatasetRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => ['dataset:read']]),
        new GetCollection(normalizationContext: ['groups' => ['dataset:read']]),

        // On définit les groupes de lecture (read) et d'écriture (write)
        new Post(
            security: "is_granted('ROLE_FOURNISSEUR')",
            normalizationContext: ['groups' => ['dataset:read']],
            denormalizationContext: ['groups' => ['dataset:write']]
        ),
        new Patch(
            security: "is_granted('ROLE_FOURNISSEUR')",
            normalizationContext: ['groups' => ['dataset:read']],
            denormalizationContext: ['groups' => ['dataset:write']]
        ),
        new Delete(security: "is_granted('ROLE_FOURNISSEUR')"),
    ]
)]
class Dataset
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['dataset:read'])] // L'ID est envoyé au front mais pas écrit par lui
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['dataset:read', 'dataset:write'])] // Autorisé en lecture et écriture
    private ?string $name = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['dataset:read', 'dataset:write'])]
    private ?string $source = null;

    #[ORM\Column(type: 'json', nullable: true)]
    #[Groups(['dataset:read', 'dataset:write'])]
    private array $metadata = [];

    #[ORM\OneToMany(mappedBy: 'dataset', targetEntity: Visualisation::class)]
    private Collection $visualisations;

    public function __construct()
    {
        $this->visualisations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getSource(): ?string
    {
        return $this->source;
    }
    
    public function setSource(string $source): self
    {
        // On définit le dossier où sont stockés les fichiers
        $basePath = '/data/stats/';

        // Si la source ne commence PAS DÉJÀ par le chemin, on l'ajoute
        if (!str_starts_with($source, $basePath)) {
            $source = $basePath . $source;
        }

        $this->source = $source;
        return $this;
    }

    public function getMetadata(): array
    {
        return $this->metadata;
    }
    
    public function setMetadata(?array $metadata): self
    {
        $this->metadata = $metadata ?? [];
        return $this;
    }

    /** @return Collection<int, Visualisation> */
    public function getVisualisations(): Collection
    {
        return $this->visualisations;
    }
}
