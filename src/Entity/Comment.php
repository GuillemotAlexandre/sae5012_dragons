<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?int $score = 0;

    #[ORM\ManyToOne(inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    #[ORM\ManyToOne(inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Article $article = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'replies')]
    private ?self $parent = null;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class, cascade: ['remove'])]
    #[ORM\OrderBy(['score' => 'DESC'])]
    private Collection $replies;

    // 👇 CORRECTION ICI : 'remove: true' n'existe pas, c'est 'orphanRemoval: true'
    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: Vote::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $votes;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->replies = new ArrayCollection();
        $this->votes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getContent(): ?string
    {
        return $this->content;
    }
    public function setContent(string $content): static
    {
        $this->content = $content;
        return $this;
    }
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }
    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }
    public function getScore(): ?int
    {
        return $this->score;
    }
    public function setScore(int $score): static
    {
        $this->score = $score;
        return $this;
    }
    public function getAuthor(): ?User
    {
        return $this->author;
    }
    public function setAuthor(?User $author): static
    {
        $this->author = $author;
        return $this;
    }
    public function getArticle(): ?Article
    {
        return $this->article;
    }
    public function setArticle(?Article $article): static
    {
        $this->article = $article;
        return $this;
    }
    public function getParent(): ?self
    {
        return $this->parent;
    }
    public function setParent(?self $parent): static
    {
        $this->parent = $parent;
        return $this;
    }

    public function getReplies(): Collection
    {
        return $this->replies;
    }
    public function addReply(self $reply): static
    {
        if (!$this->replies->contains($reply)) {
            $this->replies->add($reply);
            $reply->setParent($this);
        }
        return $this;
    }

    public function getVotes(): Collection
    {
        return $this->votes;
    }
}
