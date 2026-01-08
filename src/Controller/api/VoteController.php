<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Entity\Vote;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/custom')]
class VoteController extends AbstractController
{
    #[Route('/comments/{id}/vote/{direction}', name: 'api_comment_vote', methods: ['POST'])]
    public function vote(Comment $comment, string $direction, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) return $this->json(['error' => 'Non connecté'], 401);

        $vote = $em->getRepository(Vote::class)->findOneBy([
            'voter' => $user,
            'comment' => $comment
        ]);

        $valeur = ($direction === 'up') ? 1 : -1;
        $newScore = $comment->getScore();

        if ($vote) {
            if ($vote->getValue() === $valeur) {
                // Annulation
                $em->remove($vote);
                $newScore -= $valeur;
            } else {
                // Changement
                $newScore = $newScore - $vote->getValue() + $valeur;
                $vote->setValue($valeur);
            }
        } else {
            // Nouveau vote
            $newVote = new Vote();
            $newVote->setVoter($user);
            $newVote->setComment($comment);
            $newVote->setValue($valeur);
            $em->persist($newVote);
            $newScore += $valeur;
        }

        $comment->setScore($newScore);
        $em->flush();

        return $this->json(['score' => $newScore]);
    }
}