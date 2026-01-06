<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request, 
        UserPasswordHasherInterface $userPasswordHasher, 
        EntityManagerInterface $entityManager
    ): JsonResponse {
        // On récupère les données envoyées en JSON par le formulaire React
        $data = json_decode($request->getContent(), true);

        // Vérification sommaire des données
        if (!$data || empty($data['email']) || empty($data['plainPassword'])) {
            return $this->json([
                'status' => 'error',
                'message' => 'Les données transmises sont incomplètes.'
            ], 400);
        }

        $user = new User();
        
        // Attribution des données de base
        $user->setEmail($data['email']);
        $user->setPseudo($data['username'] ?? 'Viking Anonyme');

        // LOGIQUE DES RÔLES
        // On récupère le rôle choisi, sinon ROLE_USER par défaut
        $chosenRole = $data['role'] ?? 'ROLE_USER';
        $user->setRoles([$chosenRole]);

        // Hashage sécurisé du mot de passe
        $user->setPassword(
            $userPasswordHasher->hashPassword($user, $data['plainPassword'])
        );

        try {
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->json([
                'status' => 'success',
                'message' => 'Votre nom a été gravé dans les archives de la Guilde !'
            ], 201);

        } catch (\Exception $e) {
            // En cas d'email déjà existant par exemple
            return $this->json([
                'status' => 'error',
                'message' => 'Impossible de vous inscrire. L\'email est peut-être déjà utilisé.'
            ], 400);
        }
    }
}