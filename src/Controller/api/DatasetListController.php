<?php

namespace App\Controller\Api;

use App\Repository\DatasetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DatasetListController extends AbstractController
{
    // C'est ICI qu'on crée la route manquante /api/datasets/list
    #[Route('/api/datasets/list', name: 'api_datasets_list', methods: ['GET'])]
    public function getList(DatasetRepository $datasetRepo): JsonResponse
    {
        $datasets = $datasetRepo->findAll();
        
        $data = array_map(function($d) {
            return [
                'id' => $d->getId(),
                'name' => $d->getName(),
                'source' => $d->getSource()
            ];
        }, $datasets);

        return $this->json($data);
    }
}