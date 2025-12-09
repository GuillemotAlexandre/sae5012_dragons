<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        // Si le formulaire est soumis (Méthode POST)
        if ($request->isMethod('POST')) {
            $user = new User();
            
            // Récupération des données du formulaire HTML
            // Note: $request->request->get('nom_du_champ_html')
            $email = $request->request->get('email');
            $plainPassword = $request->request->get('plainPassword');
            $pseudo = $request->request->get('username');

            // On remplit l'utilisateur
            $user->setEmail($email);
            $user->setPseudo($pseudo); // Assure-toi d'avoir setPseudo dans ton Entité User
            $user->setRoles(['ROLE_USER']); // Rôle par défaut

            // On hash le mot de passe (Sécurité indispensable)
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $plainPassword
                )
            );

            // On sauvegarde en base de données
            $entityManager->persist($user);
            $entityManager->flush();

            // On redirige vers la page de connexion
            return $this->redirectToRoute('app_login');
        }

        return $this->render('registration/register.html.twig');
    }
}