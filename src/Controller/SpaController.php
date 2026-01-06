<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SpaController extends AbstractController
{
    // 1. Route pour la racine (http://site/)
    #[Route('/', name: 'app_root')]
    // 2. Route "Catch-All" pour laisser React gérer les URL (ex: /forum, /statistique)
    // On exclut les routes commençant par api, uploads, connect, etc. pour ne pas casser le backend
    #[Route('/{reactRouting}', name: 'app_spa', requirements: ['reactRouting' => '^(?!api|uploads|connect|logout|_profiler|_wdt).+'], defaults: ['reactRouting' => null], priority: -1)]
    public function index(): Response
    {
        // On renvoie toujours le template de base qui contient <div id="react-root">
        return $this->render('base.html.twig');
    }
}