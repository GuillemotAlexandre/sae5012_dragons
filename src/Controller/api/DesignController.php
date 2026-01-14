<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/admin')]
class DesignController extends AbstractController
{
    #[Route('/save-design', name: 'api_admin_save_design', methods: ['POST'])]
    public function save(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $color = $data['color'] ?? null;

        if (!$color || !preg_match('/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/', $color)) {
            return $this->json(['error' => 'Format de couleur invalide'], 400);
        }

        $configPath = $this->getParameter('kernel.project_dir') . '/public/design_config.json';

        $configData = [
            'primaryColor' => $color,
            'updatedAt' => date('c')
        ];

        try {
            file_put_contents($configPath, json_encode($configData, JSON_PRETTY_PRINT), LOCK_EX);

            return $this->json([
                'status' => 'success',
                'message' => 'L\'apparence a été gravée dans la roche !',
                'color' => $color
            ]);
        } catch (\Exception $e) {
            return $this->json([
                'status' => 'error',
                'message' => 'La forge a échoué : ' . $e->getMessage()
            ], 500);
        }
    }

    #[Route('/reset-design', name: 'api_admin_reset_design', methods: ['POST'])]
    public function reset(): Response
    {
        $configPath = $this->getParameter('kernel.project_dir') . '/public/design_config.json';

        try {
            if (file_exists($configPath)) {
                unlink($configPath); // Supprime le fichier de config
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
}