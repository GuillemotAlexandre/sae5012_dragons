<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource; // 👈 Import API
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use App\Repository\BlocRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups; // 👈 Import Groupes

#[ORM\Entity(repositoryClass: BlocRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Put(),
        new Patch(),
        new Delete()
    ],
    // On définit des groupes propres aux blocs si on veut les requêter seuls
    normalizationContext: ['groups' => ['bloc:read']],
    denormalizationContext: ['groups' => ['bloc:write']],
)]
class Bloc
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['bloc:read', 'article:read'])] // 👈 Visible dans l'article et dans le bloc
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 50)]
    #[Assert\NotBlank]
    #[Groups(['bloc:read', 'bloc:write', 'article:read', 'article:write'])]
    private ?string $type = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['bloc:read', 'bloc:write', 'article:read', 'article:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['bloc:read', 'bloc:write', 'article:read', 'article:write'])]
    private ?string $content = null;

    #[ORM\Column(type: 'integer')]
    #[Groups(['bloc:read', 'bloc:write', 'article:read', 'article:write'])]
    private ?int $position = null;

    #[ORM\ManyToOne(targetEntity: Article::class, inversedBy: 'blocs')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['bloc:read', 'bloc:write'])] // On évite article:read ici pour pas faire une boucle infinie Article -> Bloc -> Article
    private ?Article $article = null;

    #[ORM\OneToOne(targetEntity: Visualisation::class, mappedBy: 'bloc', cascade: ['persist', 'remove'])]
    #[Groups(['bloc:read', 'bloc:write', 'article:read', 'article:write'])]
    private ?Visualisation $visualisation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;
        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;
        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;
        return $this;
    }

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): self
    {
        $this->article = $article;
        return $this;
    }

    public function getVisualisation(): ?Visualisation
    {
        return $this->visualisation;
    }

    public function setVisualisation(?Visualisation $visualisation): self
    {
        if ($visualisation === null && $this->visualisation !== null) {
            $this->visualisation->setBloc(null);
        }
        if ($visualisation !== null && $visualisation->getBloc() !== $this) {
            $visualisation->setBloc($this);
        }
        $this->visualisation = $visualisation;
        return $this;
    }
}