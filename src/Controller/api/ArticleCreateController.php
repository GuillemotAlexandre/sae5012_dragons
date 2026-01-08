<?php

namespace App\Controller\Api;

use App\Entity\Article;
use App\Entity\Bloc;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/custom')]
class ArticleCreateController extends AbstractController
{
    #[Route('/articles/create', name: 'api_article_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) {
            return $this->json(['error' => 'Non autorisé'], 401);
        }

        // Récupération des données textuelles
        $title = $request->request->get('title');
        $summary = $request->request->get('summary');
        $music = $request->request->get('music'); // Chemin relatif (ex: film1/track.mp3)

        if (!$title) {
            return $this->json(['error' => 'Le titre est obligatoire'], 400);
        }

        $article = new Article();
        $article->setTitle($title);
        $article->setSummary($summary);
        $article->setMusic($music);
        $article->setAuthor($user);
        $article->setCreatedAt(new \DateTime());

        // Gestion des Blocs
        // Le frontend enverra les blocs sous forme: blocks[0][type], blocks[0][content], blocks[0][file]
        $blocksData = $request->request->all('blocks');
        $files = $request->files->all('blocks'); // Récupère les fichiers associés aux blocs

        $uploadDirBlocs = $this->getParameter('kernel.project_dir') . '/public/uploads/blocs';
        $uploadDirCsv = $this->getParameter('kernel.project_dir') . '/public/uploads/csv';

        if (!file_exists($uploadDirBlocs)) mkdir($uploadDirBlocs, 0777, true);
        if (!file_exists($uploadDirCsv)) mkdir($uploadDirCsv, 0777, true);

        if (is_array($blocksData)) {
            foreach ($blocksData as $index => $data) {
                $bloc = new Bloc();
                $bloc->setType($data['type']);
                $bloc->setPosition((int)$data['position']);
                $bloc->setTitle($data['title'] ?? null);
                
                // Contenu par défaut (texte)
                $content = $data['content'] ?? '';

                // Gestion des Fichiers (Image ou CSV)
                // On regarde si un fichier existe pour cet index
                if (isset($files[$index]['file'])) {
                    $uploadedFile = $files[$index]['file'];
                    $ext = $uploadedFile->getClientOriginalExtension() ?: 'bin';
                    $filename = uniqid() . '.' . $ext;

                    if ($data['type'] === 'image') {
                        $uploadedFile->move($uploadDirBlocs, $filename);
                        $content = '/uploads/blocs/' . $filename;
                    } elseif ($data['type'] === 'viz') {
                        $uploadedFile->move($uploadDirCsv, $filename);
                        // Format spécial: type_graphique::chemin_fichier
                        $vizType = $data['vizType'] ?? 'bar';
                        $content = $vizType . '::/uploads/csv/' . $filename;
                    }
                }

                $bloc->setContent($content);
                $article->addBloc($bloc);
            }
        }

        $em->persist($article);
        $em->flush();

        return $this->json(['id' => $article->getId(), 'message' => 'Article créé !'], 201);
    }
}