<?php

namespace App\Controller\Api;

use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AdminStatsController extends AbstractController
{
    #[Route('/api/admin/stats', name: 'api_admin_stats', methods: ['GET'])]
    public function getStats(UserRepository $userRepo, ArticleRepository $articleRepo): JsonResponse
    {
        // On récupère les totaux via les repositories
        $totalUsers = $userRepo->count([]);
        $totalArticles = $articleRepo->count([]);

        // On récupère les 5 derniers membres inscrits (triés par ID décroissant)
        $recentUsers = $userRepo->findBy([], ['id' => 'DESC'], 5);
        
        $usersList = array_map(fn($u) => [
            'pseudo' => $u->getPseudo(),
            'email' => $u->getEmail(),
            'roles' => $u->getRoles()
        ], $recentUsers);

        return new JsonResponse([
            'usersCount' => $totalUsers,
            'articlesCount' => $totalArticles,
            'recentUsers' => $usersList
        ]);
    }
}