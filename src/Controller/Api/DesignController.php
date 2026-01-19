<?php

namespace App\Controller\Api;

use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/admin')]
#[IsGranted('ROLE_DESIGNER')]
class DesignController extends AbstractController
{
    /**
     * DESIGN GLOBAL : Sauvegarde dans le fichier JSON public.
     * Synchronisé avec App.js (clé 'primaryColor')
     */
    #[Route('/save-global-design', name: 'api_admin_save_design', methods: ['POST'])]
    public function save(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $color = $data['mainColor'] ?? null;

        if (!$color || !preg_match('/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/', $color)) {
            return $this->json(['error' => 'Format de couleur invalide'], 400);
        }

        $configPath = $this->getParameter('kernel.project_dir') . '/public/design_config.json';

        // IMPORTANT : On utilise 'primaryColor' pour correspondre au fetch de App.js
        $configData = [
            'primaryColor' => $color, 
            'updatedAt' => date('c')
        ];

        try {
            file_put_contents($configPath, json_encode($configData, JSON_PRETTY_PRINT), LOCK_EX);

            return $this->json([
                'status' => 'success',
                'message' => 'L\'apparence globale a été gravée dans la roche !',
                'color' => $color
            ]);
        } catch (\Exception $e) {
            return $this->json([
                'status' => 'error',
                'message' => 'La forge a échoué : ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * DESIGN GLOBAL : Réinitialisation
     * Supprime le fichier pour revenir aux CSS variables par défaut
     */
    #[Route('/reset-global-design', name: 'api_admin_reset_design', methods: ['POST'])]
    public function reset(): Response
    {
        $configPath = $this->getParameter('kernel.project_dir') . '/public/design_config.json';

        try {
            if (file_exists($configPath)) {
                unlink($configPath);
            }

            return $this->json([
                'status' => 'success',
                'message' => 'Les couleurs d\'origine ont été restaurées !',
                'defaultColor' => '#e67e22'
            ]);
        } catch (\Exception $e) {
            return $this->json([
                'status' => 'error',
                'message' => 'Impossible de réinitialiser : ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * DESIGN PAR ARTICLE : Sauvegarde en base de données
     */
    #[Route('/article/{id}/style', name: 'api_admin_article_style', methods: ['POST'])]
    public function saveArticleStyle(Article $article, Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);
        $styles = $data['designConfig'] ?? null;

        if ($styles === null) {
            return $this->json(['error' => 'Aucun style fourni'], 400);
        }

        try {
            $article->setDesignConfig($styles);
            $em->flush();

            return $this->json([
                'status' => 'success',
                'message' => 'Le style de l\'article "' . $article->getTitle() . '" a été mis à jour !',
                'designConfig' => $styles
            ]);
        } catch (\Exception $e) {
            return $this->json([
                'status' => 'error',
                'message' => 'Erreur lors de la sauvegarde en base : ' . $e->getMessage()
            ], 500);
        }
    }
}