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

        // 1. Données de l'article
        $title = $request->request->get('title');
        $summary = $request->request->get('summary');
        $music = $request->request->get('music'); 

        if (!$title) {
            return $this->json(['error' => 'Le titre est obligatoire'], 400);
        }

        $article = new Article();
        $article->setTitle($title);
        $article->setSummary($summary);
        $article->setMusic($music);
        $article->setAuthor($user);
        $article->setCreatedAt(new \DateTime());

        // 2. Gestion des Blocs
        // ⚠️ CORRECTION : On utilise 'blocs' (comme dans le React) et non 'blocks'
        $blocsData = $request->request->all()['blocs'] ?? []; 
        $files = $request->files->get('blocs') ?? [];

        $uploadDirBlocs = $this->getParameter('kernel.project_dir') . '/public/uploads/blocs';
        if (!file_exists($uploadDirBlocs)) mkdir($uploadDirBlocs, 0777, true);

        if (is_array($blocsData)) {
            foreach ($blocsData as $index => $data) {
                $bloc = new Bloc();
                $bloc->setType($data['type']);
                $bloc->setPosition((int)$data['position']);
                
                // Contenu texte par défaut
                $content = $data['content'] ?? '';

                // CAS 1 : IMAGE (Upload de fichier)
                if ($data['type'] === 'image' && isset($files[$index]['imageFile'])) {
                    $uploadedFile = $files[$index]['imageFile'];
                    $ext = $uploadedFile->getClientOriginalExtension() ?: 'jpg';
                    $filename = uniqid() . '.' . $ext;
                    
                    try {
                        $uploadedFile->move($uploadDirBlocs, $filename);
                        $content = '/uploads/blocs/' . $filename;
                    } catch (\Exception $e) {
                        return $this->json(['error' => 'Erreur upload image'], 500);
                    }
                } 
                // CAS 2 : STATISTIQUES (Sélection d'un CSV existant)
                elseif ($data['type'] === 'stats' || $data['type'] === 'viz') {
                    // Le React nous envoie le type de graphique et le chemin du CSV choisi
                    $vizType = $data['vizType'] ?? 'bar';
                    $csvPath = $data['csvPath'] ?? ''; 
                    
                    // On formate le contenu : "type_graphique::chemin_fichier"
                    // Ex: "bar::/data/stats/population.csv"
                    if ($csvPath) {
                        $content = $vizType . '::' . $csvPath;
                    }
                }

                $bloc->setContent($content);
                $article->addBloc($bloc);
            }
        }

        try {
            $em->persist($article);
            $em->flush();
        } catch (\Exception $e) {
            return $this->json(['error' => 'Erreur base de données: ' . $e->getMessage()], 500);
        }

        return $this->json(['id' => $article->getId(), 'message' => 'Article créé !'], 201);
    }
}