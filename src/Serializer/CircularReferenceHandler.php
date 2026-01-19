<?php

namespace App\Serializer;

use App\Entity\User;
use App\Entity\Article;
use Symfony\Component\Routing\RouterInterface;

class CircularReferenceHandler
{
    public function __invoke($object)
    {
        // Si c'est un User ou un Article qui boucle, on renvoie juste son ID
        if (method_exists($object, 'getId')) {
            return $object->getId();
        }
        
        return null;
    }
}