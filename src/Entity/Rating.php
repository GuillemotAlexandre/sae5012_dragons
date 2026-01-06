<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Repository\RatingRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: RatingRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        // Seul l'abonné (et les rôles supérieurs) peut créer une note
        new Post(
            security: "is_granted('ROLE_ABONNE')",
            // On peut réutiliser le même processeur que pour Article pour l'auteur
            processor: \App\State\ArticleProcessor::class 
        )
    ],
    normalizationContext: ['groups' => ['rating:read']],
    denormalizationContext: ['groups' => ['rating:write']]
)]
class Rating
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['rating:read', 'article:read'])]
    private ?int $id = null;

    #[ORM\Column]
    #[Assert\Range(min: 1, max: 5)]
    #[Groups(['rating:read', 'rating:write', 'article:read'])]
    private ?int $value = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['rating:read'])]
    private ?User $author = null;

    #[ORM\ManyToOne(inversedBy: 'ratings')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['rating:read', 'rating:write'])]
    private ?Article $article = null;

    // Si tu veux noter des blocs spécifiques plus tard, tu pourrais ajouter ceci :
    // #[ORM\ManyToOne(inversedBy: 'ratings')]
    // private ?Bloc $bloc = null;

    public function getId(): ?int { return $this->id; }

    public function getValue(): ?int { return $this->value; }
    public function setValue(int $value): static { $this->value = $value; return $this; }

    public function getAuthor(): ?User { return $this->author; }
    public function setAuthor(?User $author): static { $this->author = $author; return $this; }

    public function getArticle(): ?Article { return $this->article; }
    public function setArticle(?Article $article): static { $this->article = $article; return $this; }
}