<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function login(): Response
    {
        return $this->render('security/login.html.twig', [
            'controller_name' => 'SecurityController',
        ]);
    }
    
    #[Route('/logout', name: 'app_logout')]
    public function logout(): void
    {
        // Cette méthode sera interceptée par le pare-feu de sécurité plus tard
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}