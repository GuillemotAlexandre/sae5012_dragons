<?php

namespace App\Entity;

use App\Repository\VoteRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VoteRepository::class)]
class Vote
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $value = 0;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $voter = null;

    #[ORM\ManyToOne(inversedBy: 'votes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Comment $comment = null;

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getValue(): ?int
    {
        return $this->value;
    }
    public function setValue(int $value): static
    {
        $this->value = $value;
        return $this;
    }
    public function getVoter(): ?User
    {
        return $this->voter;
    }
    public function setVoter(?User $voter): static
    {
        $this->voter = $voter;
        return $this;
    }
    public function getComment(): ?Comment
    {
        return $this->comment;
    }
    public function setComment(?Comment $comment): static
    {
        $this->comment = $comment;
        return $this;
    }
}
