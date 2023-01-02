<?php

namespace App\Controller;

use App\Entity\Certifications;
use App\Form\CertificationsType;
use App\Repository\CertificationsRepository;
use App\Repository\EtudiantsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/certifications")
 */
class CertificationsController extends AbstractController
{
    /**
     * @Route("/", name="app_certifications_index", methods={"GET"})
     */
    public function index(CertificationsRepository $certificationsRepository,SerializerInterface $serializer): JsonResponse
    {

        $certifications = $certificationsRepository->findAll();
            
        //dd($etudiants);

        $jsonContent = $serializer->serialize($certifications, 'json');
        return $this->json($jsonContent);
    }

    /**
     * @Route("/new", name="app_certifications_new", methods={"GET", "POST"})
     */
    public function new(Request $request, CertificationsRepository $certificationsRepository): Response
    {
        $certification = new Certifications();
        $form = $this->createForm(CertificationsType::class, $certification);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $certificationsRepository->add($certification, true);

            return $this->redirectToRoute('app_certifications_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('certifications/new.html.twig', [
            'certification' => $certification,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_certifications_show", methods={"GET"})
     */
    public function show(Certifications $certification): Response
    {
        return $this->render('certifications/show.html.twig', [
            'certification' => $certification,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_certifications_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Certifications $certification, CertificationsRepository $certificationsRepository): Response
    {
        $form = $this->createForm(CertificationsType::class, $certification);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $certificationsRepository->add($certification, true);

            return $this->redirectToRoute('app_certifications_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('certifications/edit.html.twig', [
            'certification' => $certification,
            'form' => $form,
        ]);
    }

    /**
 * @Route("/delete/{id}", name="app_certifications_delete", methods={"DELETE"})
 */
public function delete(CertificationsRepository $certificationsRepository,$id): JsonResponse
{
    $certification = $this->certificationsRepository->findOneBy(['id' => $id]);

    $this->certificationsRepository->removeCustomer($certification);

    return new JsonResponse(['status' => 'certification deleted'], Response::HTTP_NO_CONTENT);
}

    public function removeCustomer(Certifications $certification)
{
    $this->manager->remove($certification);
    $this->manager->flush();
}
}
