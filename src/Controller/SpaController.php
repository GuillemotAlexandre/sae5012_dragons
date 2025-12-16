<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SpaController extends AbstractController
{
    
    #[Route('/{reactRouting}', name: 'app_spa', requirements: ['reactRouting' => '^(?!api|uploads|connect|logout).+'], defaults: ['reactRouting' => null], priority: -1)]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}