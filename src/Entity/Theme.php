<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use App\Repository\ThemeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ThemeRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        // Seul le Designer (et l'Admin par héritage) peut créer ou modifier un thème
        new Post(security: "is_granted('ROLE_DESIGNER')"),
        new Patch(security: "is_granted('ROLE_DESIGNER')"),
    ]
)]
class Theme
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 100)]
    private ?string $name = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private array $colors = [];

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private ?string $fontSize = null;

    #[ORM\ManyToMany(targetEntity: Article::class, mappedBy: 'themes')]
    private Collection $articles;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
    }

    public function getId(): ?int { return $this->id; }

    public function getName(): ?string { return $this->name; }
    public function setName(string $name): self { $this->name = $name; return $this; }

    public function getColors(): array { return $this->colors; }
    public function setColors(?array $colors): self { $this->colors = $colors ?? []; return $this; }

    public function getFontSize(): ?string { return $this->fontSize; }
    public function setFontSize(?string $fontSize): self { $this->fontSize = $fontSize; return $this; }

    /** @return Collection<int, Article> */
    public function getArticles(): Collection { return $this->articles; }
}