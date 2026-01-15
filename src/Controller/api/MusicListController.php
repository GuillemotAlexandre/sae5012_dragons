<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;

class MusicListController extends AbstractController
{
    #[Route('/api/music/list', name: 'api_music_list', methods: ['GET'])]
    public function getMusicList(KernelInterface $kernel): JsonResponse
    {
        // Chemin vers le dossier public/musique
        $projectDir = $kernel->getProjectDir();
        $basePath = $projectDir . '/public/musique';

        $musicLibrary = [];
        $folders = ['film1', 'film2', 'film3'];

        foreach ($folders as $folder) {
            $targetDir = $basePath . '/' . $folder;

            if (is_dir($targetDir)) {
                // On scanne les fichiers, on enlève les . et ..
                $files = array_diff(scandir($targetDir), ['.', '..']);
                
                // On ne garde que les mp3/wav/ogg pour être sûr
                foreach ($files as $file) {
                    if (preg_match('/\.(mp3|wav|ogg)$/i', $file)) {
                        $musicLibrary[$folder][] = $file;
                    }
                }
            } else {
                $musicLibrary[$folder] = []; // Dossier vide ou inexistant
            }
        }

        return $this->json($musicLibrary);
    }
}