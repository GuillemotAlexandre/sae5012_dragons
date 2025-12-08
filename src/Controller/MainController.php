<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class MainController extends AbstractController
{
    #[Route('/acceuil', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('main/home.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/statistique', name: 'app_stats')]
    public function statistics(): Response
    {
        return $this->render('main/stats.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/forum', name: 'app_forum')]
    public function forum(Request $request, EntityManagerInterface $em): Response
    {
        // 1. Création du formulaire d'ajout d'article
        $article = new Article();
        $form = $this->createForm(ArticleType::class, $article);
        
        $form->handleRequest($request);

        // 2. Traitement du formulaire si soumis
        if ($form->isSubmitted() && $form->isValid()) {
            // On vérifie si l'utilisateur est connecté
            if (!$this->getUser()) {
                return $this->redirectToRoute('app_login');
            }

            // On remplit les champs automatiques (Auteur et Date)
            $article->setAuthor($this->getUser());
            $article->setCreatedAt(new \DateTime());

            // --- GESTION DE L'UPLOAD DES IMAGES ---
            // On définit le dossier de destination
            $uploadDir = $this->getParameter('kernel.project_dir') . '/public/uploads/blocs';
            
            // Création du dossier s'il n'existe pas
            if (!file_exists($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }

            // On parcourt les blocs soumis par le formulaire
            foreach ($form->get('blocs') as $blocForm) {
                // On récupère le fichier uploadé (champ 'imageFile' mappé à false dans BlocType)
                $uploadedFile = $blocForm->get('imageFile')->getData();
                
                // On récupère l'entité Bloc correspondante pour la modifier
                $blocEntity = $blocForm->getData();

                if ($uploadedFile) {
                    // On génère un nom de fichier unique
                    $newFilename = uniqid() . '.' . $uploadedFile->guessExtension();

                    try {
                        // On déplace le fichier
                        $uploadedFile->move($uploadDir, $newFilename);

                        // On met à jour l'entité avec le CHEMIN WEB vers l'image
                        // Note : On stocke '/uploads/blocs/nomfichier.jpg'
                        $blocEntity->setContent('/uploads/blocs/' . $newFilename);
                        
                        // On force le type 'image' au cas où
                        $blocEntity->setType('image');

                    } catch (\Exception $e) {
                        $this->addFlash('error', 'Erreur lors de l\'upload de l\'image');
                    }
                }
            }
            // ---------------------------------------

            $em->persist($article);
            $em->flush();

            // Message flash pour dire bravo
            $this->addFlash('success', 'Votre parchemin a été publié !');

            return $this->redirectToRoute('app_forum');
        }

        // 3. Récupération de tous les articles (du plus récent au plus vieux)
        $articles = $em->getRepository(Article::class)->findBy([], ['createdAt' => 'DESC']);

        return $this->render('main/forum.html.twig', [
            'form' => $form->createView(),
            'articles' => $articles,
        ]);
    }

    #[Route('/forum/article/{id}', name: 'app_article_show')]
    public function show(Article $article): Response
    {
        return $this->render('main/show.html.twig', [
            'article' => $article,
        ]);
    }
}