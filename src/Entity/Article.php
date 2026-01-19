<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use App\State\ArticleProcessor;
use ApiPlatform\Metadata\ApiFilter; // 👈 1. Import
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Metadata\Put;


#[ORM\Entity(repositoryClass: ArticleRepository::class)]
#[ApiResource(
    normalizationContext: [
        'groups' => ['article:read'],
        'enable_max_depth' => true // 👈 Ajoute cette ligne
    ],
    operations: [
        // 1. Lecture PUBLIQUE (Important pour le visiteur et l'abonné)
        new Get(
            security: "is_granted('PUBLIC_ACCESS')" 
        ),
        new GetCollection(
            security: "is_granted('PUBLIC_ACCESS')"
        ),

        // 2. Écriture RESTREINTE
        new Post(
            security: "is_granted('ROLE_AUTEUR')", 
            processor: ArticleProcessor::class
        ),
        new Put(security: "is_granted('ROLE_AUTEUR') and object.getAuthor() == user"),
        new Patch(security: "is_granted('ROLE_AUTEUR') and object.getAuthor() == user"),
        new Delete(security: "is_granted('ROLE_AUTEUR') and object.getAuthor() == user"),
    ]
)]
#[ApiFilter(OrderFilter::class, properties: ['createdAt', 'averageRating'])]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['article:read'])]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['article:read', 'article:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['article:read', 'article:write'])]
    private ?string $summary = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['article:read', 'article:write'])]
    private ?string $music = null;

    #[ORM\Column(type: 'json', nullable: true)]
    #[Groups(['article:read', 'article:write'])]
    private ?array $designConfig = null;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Bloc::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Groups(['article:read', 'article:write'])]
    private Collection $blocs;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'articles')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    #[Groups(['article:read'])]
    private ?User $author = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(['article:read'])]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    #[Groups(['article:read'])]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Comment::class, orphanRemoval: true)]
    #[Groups(['article:read'])]
    private Collection $comments;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Rating::class, orphanRemoval: true)]
    #[Groups(['article:read'])]
    private Collection $ratings;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->blocs = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->ratings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getSummary(): ?string
    {
        return $this->summary;
    }

    public function setSummary(?string $summary): self
    {
        $this->summary = $summary;
        return $this;
    }

    public function getDesignConfig(): ?array
    {
        return $this->designConfig;
    }

    public function setDesignConfig(?array $designConfig): self
    {
        $this->designConfig = $designConfig;
        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    public function getBlocs(): Collection
    {
        return $this->blocs;
    }

    public function addBloc(Bloc $bloc): self
    {
        if (!$this->blocs->contains($bloc)) {
            $this->blocs->add($bloc);
            $bloc->setArticle($this);
        }
        return $this;
    }

    public function removeBloc(Bloc $bloc): self
    {
        if ($this->blocs->removeElement($bloc)) {
            if ($bloc->getArticle() === $this) {
                $bloc->setArticle(null);
            }
        }
        return $this;
    }

    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setArticle($this);
        }
        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        $this->comments->removeElement($comment);
        return $this;
    }

    public function getRatings(): Collection
    {
        return $this->ratings;
    }

    public function addRating(Rating $rating): static
    {
        if (!$this->ratings->contains($rating)) {
            $this->ratings->add($rating);
            $rating->setArticle($this);
        }
        return $this;
    }

    public function removeRating(Rating $rating): static
    {
        $this->ratings->removeElement($rating);
        return $this;
    }


    #[ORM\Column(type: 'float', nullable: true)]
    #[Groups(['article:read', 'article:write'])]
    private ?float $averageRating = null;

    // ... getters et setters ...
    public function getAverageRating(): ?float
    {
        return $this->averageRating;
    }

    public function setAverageRating(?float $averageRating): self
    {
        $this->averageRating = $averageRating;
        return $this;
    }





    // public function getAverageRating(): ?float
    // {
    //     if ($this->ratings->isEmpty()) return null;
    //     $total = 0;
    //     foreach ($this->ratings as $rating) {
    //         $total += $rating->getValue();
    //     }
    //     return round($total / $this->ratings->count(), 1);
    // }

    public function getMusic(): ?string
    {
        return $this->music;
    }

    public function setMusic(?string $music): self
    {
        $this->music = $music;
        return $this;
    }
}
