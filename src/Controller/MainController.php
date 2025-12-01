<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    #[Route('/acceuil', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('main/home.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/statistique', name: 'app_stats')]
    public function statistics(): Response
    {
        return $this->render('main/stats.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/forum', name: 'app_forum')]
    public function forum(): Response
    {
        return $this->render('main/forum.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
    

}
