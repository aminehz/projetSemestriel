<?php

namespace App\Controller;

use App\Entity\Etudiants;
use App\Form\EtudiantsType;
use App\Repository\EtudiantsRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/etudiants")
 */
class EtudiantsController extends AbstractController
{
    /**
     * @Route("/", name="app_etudiants_index", methods={"GET"})
     */
    public function index(EtudiantsRepository $etudiantsRepository,SerializerInterface $serializer): JsonResponse
    {

        $etudiants = $etudiantsRepository->findAll();
            
        //dd($etudiants);

        $jsonContent = $serializer->serialize($etudiants, 'json');
        return $this->json(['etudiants' => $jsonContent],200,
        ['Content-Type' => 'application/json;charset=UTF-8']);
    }

    /**
     * @Route("/new", name="app_etudiants_new", methods={"GET", "POST"})
     */
    public function new(Request $request, EtudiantsRepository $etudiantsRepository): Response
    {
        $etudiant = new Etudiants();
        $form = $this->createForm(EtudiantsType::class, $etudiant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $etudiantsRepository->add($etudiant, true);

            return $this->redirectToRoute('app_etudiants_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('etudiants/new.html.twig', [
            'etudiant' => $etudiant,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_etudiants_show", methods={"GET"})
     */
    public function show(Etudiants $etudiant): Response
    {
        return $this->render('etudiants/show.html.twig', [
            'etudiant' => $etudiant,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_etudiants_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Etudiants $etudiant, EtudiantsRepository $etudiantsRepository): Response
    {
        $form = $this->createForm(EtudiantsType::class, $etudiant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $etudiantsRepository->add($etudiant, true);

            return $this->redirectToRoute('app_etudiants_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('etudiants/edit.html.twig', [
            'etudiant' => $etudiant,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_etudiants_delete", methods={"POST"})
     */
    public function delete(Request $request, Etudiants $etudiant, EtudiantsRepository $etudiantsRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$etudiant->getId(), $request->request->get('_token'))) {
            $etudiantsRepository->remove($etudiant, true);
        }

        return $this->redirectToRoute('app_etudiants_index', [], Response::HTTP_SEE_OTHER);
    }
}
