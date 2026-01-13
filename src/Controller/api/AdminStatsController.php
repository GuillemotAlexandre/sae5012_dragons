<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Article;
use App\Entity\Dataset;
use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use App\Repository\DatasetRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/admin')]
#[IsGranted('ROLE_AUTEUR')] 
class AdminStatsController extends AbstractController
{
    #[Route('/stats', name: 'api_admin_stats', methods: ['GET'])]
    public function getStats(
        UserRepository $userRepo, 
        ArticleRepository $articleRepo,
        DatasetRepository $datasetRepo 
    ): JsonResponse {
        /** @var User $user */
        $user = $this->getUser();
        $roles = $user->getRoles();

        $data = [
            'usersCount' => $userRepo->count([]),
            'articlesCount' => $articleRepo->count([]),
            'allUsers' => [],
            'managementArticles' => [],
            'datasets' => []
        ];

        // 1. Gestion des Utilisateurs (ADMIN uniquement)
        if (in_array('ROLE_ADMIN', $roles)) {
            $data['allUsers'] = array_map(function(User $u): array {
                return [
                    'id' => $u->getId(),
                    'pseudo' => $u->getPseudo(),
                    'email' => $u->getEmail(),
                    'roles' => $u->getRoles()
                ];
            }, $userRepo->findBy([], ['pseudo' => 'ASC']));
        }

        // 2. Gestion des Articles (Logique selon le rôle)
        $articles = (in_array('ROLE_EDITEUR', $roles) || in_array('ROLE_ADMIN', $roles)) 
            ? $articleRepo->findAll() 
            : $articleRepo->findBy(['author' => $user]);

        $data['managementArticles'] = array_map(function(Article $a): array {
            return [
                'id' => $a->getId(),
                'title' => $a->getTitle(),
                'author' => $a->getAuthor() ? $a->getAuthor()->getPseudo() : 'Anonyme',
                'createdAt' => $a->getCreatedAt() ? $a->getCreatedAt()->format('d/m/Y') : 'N/A'
            ];
        }, $articles);

        // 3. Gestion des Datasets (FOURNISSEUR et ADMIN)
        if (in_array('ROLE_FOURNISSEUR', $roles) || in_array('ROLE_ADMIN', $roles)) {
            $data['datasets'] = array_map(function(Dataset $d): array {
                $metadata = $d->getMetadata();
                return [
                    'id' => $d->getId(),
                    'name' => $d->getName(),
                    'source' => $d->getSource(),
                    'rowsCount' => $metadata['rowCount'] ?? 0
                ];
            }, $datasetRepo->findAll());
        }

        return new JsonResponse($data);
    }

    #[Route('/user/{id}/promote', name: 'api_admin_promote_user', methods: ['PATCH'])]
    #[IsGranted('ROLE_ADMIN')]
    public function toggleRole(User $user, EntityManagerInterface $em): JsonResponse
    {
        if ($user === $this->getUser()) {
            return new JsonResponse(['message' => 'Action impossible sur soi-même.'], 403);
        }

        $roles = $user->getRoles();
        
        // Cycle de promotion optimisé
        $newRoles = match(true) {
            in_array('ROLE_ADMIN', $roles) => ['ROLE_USER'],
            in_array('ROLE_FOURNISSEUR', $roles) => ['ROLE_ADMIN'],
            in_array('ROLE_DESIGNER', $roles) => ['ROLE_FOURNISSEUR'],
            in_array('ROLE_EDITEUR', $roles) => ['ROLE_DESIGNER'],
            in_array('ROLE_AUTEUR', $roles) => ['ROLE_EDITEUR'],
            default => ['ROLE_AUTEUR'],
        };

        $user->setRoles($newRoles);
        $em->flush();

        return new JsonResponse(['newRoles' => $user->getRoles()]);
    }

    #[Route('/user/{id}', name: 'api_admin_delete_user', methods: ['DELETE'])]
    #[IsGranted('ROLE_ADMIN')] 
    public function deleteUser(User $user, EntityManagerInterface $em): JsonResponse
    {
        if ($user === $this->getUser()) {
            return new JsonResponse(['message' => 'Action interdite sur soi-même.'], 403);
        }
        
        $em->remove($user);
        $em->flush();
        
        return new JsonResponse(['message' => 'Utilisateur supprimé avec succès.']);
    }
}