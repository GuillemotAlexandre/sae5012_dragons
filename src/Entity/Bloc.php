<?php

namespace App\Entity;

use App\Repository\BlocRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BlocRepository::class)]
class Bloc
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 50)]
    #[Assert\NotBlank]
    private ?string $type = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $content = null;

    #[ORM\Column(type: 'integer')]
    private ?int $position = null;

    #[ORM\ManyToOne(targetEntity: Article::class, inversedBy: 'blocs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Article $article = null;

    #[ORM\OneToOne(targetEntity: Visualisation::class, mappedBy: 'bloc', cascade: ['persist', 'remove'])]
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

    // 👇 MÉTHODES AJOUTÉES QUI MANQUAIENT 👇

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