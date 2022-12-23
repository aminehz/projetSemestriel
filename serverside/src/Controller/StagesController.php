<?php

namespace App\Controller;

use App\Entity\Stages;
use App\Form\StagesType;
use App\Repository\StagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/stages")
 */
class StagesController extends AbstractController
{
    /**
     * @Route("/", name="app_stages_index", methods={"GET"})
     */
    public function index(StagesRepository $stagesRepository,SerializerInterface $serializer): Response
    {
        $stages=$stagesRepository->findAll();
        $jsonContent = $serializer->serialize($stages, 'json');
        return $this->json($jsonContent);
    }

    /**
     * @Route("/new", name="app_stages_new", methods={"GET", "POST"})
     */
    public function new(Request $request, StagesRepository $stagesRepository): Response
    {
        $stage = new Stages();
        $form = $this->createForm(StagesType::class, $stage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $stagesRepository->add($stage, true);

            return $this->redirectToRoute('app_stages_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('stages/new.html.twig', [
            'stage' => $stage,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_stages_show", methods={"GET"})
     */
    public function show(Stages $stage): Response
    {
        return $this->render('stages/show.html.twig', [
            'stage' => $stage,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_stages_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Stages $stage, StagesRepository $stagesRepository): Response
    {
        $form = $this->createForm(StagesType::class, $stage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $stagesRepository->add($stage, true);

            return $this->redirectToRoute('app_stages_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('stages/edit.html.twig', [
            'stage' => $stage,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_stages_delete", methods={"POST"})
     */
    public function delete(Request $request, Stages $stage, StagesRepository $stagesRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$stage->getId(), $request->request->get('_token'))) {
            $stagesRepository->remove($stage, true);
        }

        return $this->redirectToRoute('app_stages_index', [], Response::HTTP_SEE_OTHER);
    }
}
