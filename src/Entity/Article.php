<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => ['article:read']],
    denormalizationContext: ['groups' => ['article:write']],
)]
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

    // 👇 NOUVEAU CHAMP MUSIQUE 👇
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['article:read', 'article:write'])]
    private ?string $music = null;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Bloc::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Groups(['article:read', 'article:write'])]
    private Collection $blocs;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'articles')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    #[Groups(['article:read'])]
    private ?User $author = null;

    #[ORM\Column(type: 'datetime')]
    #[Groups(['article:read'])]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
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
        if ($this->comments->removeElement($comment)) {
        }
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
        if ($this->ratings->removeElement($rating)) {
        }
        return $this;
    }

    public function getAverageRating(): ?float
    {
        if ($this->ratings->isEmpty()) return null;
        $total = 0;
        foreach ($this->ratings as $rating) $total += $rating->getValue();
        return round($total / $this->ratings->count(), 1);
    }

    // 👇 GETTER ET SETTER MUSIQUE 👇
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
