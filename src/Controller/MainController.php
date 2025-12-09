<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\Rating; // 👈 Import de l'entité Rating
use App\Entity\Vote;
use App\Form\ArticleType;
use App\Form\CommentType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
        // 1. GESTION CRÉATION ARTICLE + UPLOAD
        $article = new Article();
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$this->getUser()) return $this->redirectToRoute('app_login');

            $article->setAuthor($this->getUser());
            $article->setCreatedAt(new \DateTime());

            // Gestion Upload
            $uploadDir = $this->getParameter('kernel.project_dir') . '/public/uploads/blocs';
            if (!file_exists($uploadDir)) mkdir($uploadDir, 0777, true);

            foreach ($form->get('blocs') as $blocForm) {
                $uploadedFile = $blocForm->get('imageFile')->getData();
                $blocEntity = $blocForm->getData();

                if ($uploadedFile) {
                    $originalExt = $uploadedFile->getClientOriginalExtension();
                    $ext = $originalExt ? $originalExt : 'jpg';
                    $newFilename = uniqid() . '.' . $ext;

                    try {
                        $uploadedFile->move($uploadDir, $newFilename);
                        $blocEntity->setContent('/uploads/blocs/' . $newFilename);
                        $blocEntity->setType('image');
                    } catch (\Exception $e) {
                        $this->addFlash('error', 'Erreur upload image');
                    }
                }
            }

            $em->persist($article);
            $em->flush();
            $this->addFlash('success', 'Votre parchemin a été publié !');
            return $this->redirectToRoute('app_forum');
        }

        $articles = $em->getRepository(Article::class)->findBy([], ['createdAt' => 'DESC']);

        return $this->render('main/forum.html.twig', [
            'form' => $form->createView(),
            'articles' => $articles,
        ]);
    }

    #[Route('/forum/article/{id}', name: 'app_article_show')]
    public function show(Article $article, Request $request, EntityManagerInterface $em): Response
    {
        // 2. GESTION COMMENTAIRES
        $comment = new Comment();
        $commentForm = $this->createForm(CommentType::class, $comment);
        $commentForm->handleRequest($request);

        if ($commentForm->isSubmitted() && $commentForm->isValid()) {
            if (!$this->getUser()) return $this->redirectToRoute('app_login');

            $comment->setAuthor($this->getUser());
            $comment->setArticle($article);
            
            $parentId = $commentForm->get('parentid')->getData();
            if ($parentId) {
                $parent = $em->getRepository(Comment::class)->find($parentId);
                if ($parent) $comment->setParent($parent);
            }

            $em->persist($comment);
            $em->flush();
            
            return $this->redirectToRoute('app_article_show', ['id' => $article->getId()]);
        }

        return $this->render('main/show.html.twig', [
            'article' => $article,
            'commentForm' => $commentForm->createView(),
        ]);
    }

    // 👇 LA ROUTE QUI MANQUAIT POUR NOTER LES ARTICLES 👇
    #[Route('/article/{id}/rate/{score}', name: 'app_article_rate')]
    public function rate(Article $article, int $score, EntityManagerInterface $em): Response
    {
        if (!$this->getUser()) return $this->redirectToRoute('app_login');

        // Sécurité : score entre 1 et 5 uniquement
        if ($score < 1 || $score > 5) return $this->redirectToRoute('app_article_show', ['id' => $article->getId()]);

        // Vérifier si l'utilisateur a déjà noté
        $rating = $em->getRepository(Rating::class)->findOneBy([
            'author' => $this->getUser(),
            'article' => $article
        ]);

        if ($rating) {
            // Mise à jour de la note
            $rating->setValue($score);
        } else {
            // Nouvelle note
            $rating = new Rating();
            $rating->setAuthor($this->getUser());
            $rating->setArticle($article);
            $rating->setValue($score);
            $em->persist($rating);
        }

        $em->flush();
        $this->addFlash('success', 'Merci pour votre note !');

        return $this->redirectToRoute('app_article_show', ['id' => $article->getId()]);
    }

    #[Route('/comment/{id}/vote/{direction}', name: 'app_comment_vote')]
    public function vote(Comment $comment, string $direction, EntityManagerInterface $em): Response
    {
        // 3. GESTION VOTES COMMENTAIRES
        $user = $this->getUser();
        if (!$user) return $this->redirectToRoute('app_login');

        $vote = $em->getRepository(Vote::class)->findOneBy([
            'voter' => $user,
            'comment' => $comment
        ]);

        $valeur = ($direction === 'up') ? 1 : -1;

        if ($vote) {
            if ($vote->getValue() === $valeur) {
                $em->remove($vote);
                $comment->setScore($comment->getScore() - $valeur);
            } else {
                $comment->setScore($comment->getScore() - $vote->getValue() + $valeur);
                $vote->setValue($valeur);
            }
        } else {
            $newVote = new Vote();
            $newVote->setVoter($user);
            $newVote->setComment($comment);
            $newVote->setValue($valeur);
            $em->persist($newVote);
            $comment->setScore($comment->getScore() + $valeur);
        }

        $em->flush();
        return $this->redirectToRoute('app_article_show', ['id' => $comment->getArticle()->getId()]);
    }
}