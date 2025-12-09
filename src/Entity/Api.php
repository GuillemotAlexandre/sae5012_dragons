<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DragonsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: DragonsRepository::class)]
#[ApiResource]
#[Broadcast]
class Dragons
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
