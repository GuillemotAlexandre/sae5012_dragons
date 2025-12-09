<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $summary = null;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Bloc::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $blocs;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'articles')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $author = null;

    #[ORM\Column(type: 'datetime')]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Comment::class, orphanRemoval: true)]
    private Collection $comments;

    // 👇 AJOUT DE LA RELATION RATINGS (Qui avait disparu) 👇
    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Rating::class, orphanRemoval: true)]
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

    /**
     * @return Collection<int, Bloc>
     */
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
                // orphanRemoval s'occupe de la suppression
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
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
            if ($comment->getArticle() === $this) {
                // ...
            }
        }

        return $this;
    }

    // 👇 GESTION DES NOTES (C'est ce qui manquait !) 👇

    /**
     * @return Collection<int, Rating>
     */
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
            if ($rating->getArticle() === $this) {
                // set the owning side to null (unless already changed)
            }
        }

        return $this;
    }

    // Cette méthode est appelée par {{ article.averageRating }} dans Twig
    public function getAverageRating(): ?float
    {
        if ($this->ratings->isEmpty()) {
            return null;
        }

        $total = 0;
        foreach ($this->ratings as $rating) {
            $total += $rating->getValue();
        }

        return round($total / $this->ratings->count(), 1);
    }
}