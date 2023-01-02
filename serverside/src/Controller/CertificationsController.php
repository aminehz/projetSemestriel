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
{  private $certificationsRepository;

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
     * @Route("/addCertif",name="app_certifications_addCertif",methods={"POST","GET"})
     */
    public function addCertif(Request $request,CertificationsRepository $certificationsRepository): JsonResponse
    {
        $data=json_decode($request->getContent(),true);
        
        $titreCertifications=$data['titreCertifications'];
        $descriptionCertifications=$data['descriptionCertifications'];
        $imageCertifications=$data['imageCertifications'];

        if(empty($titreCertifications)|| empty($descriptionCertifications) || ($imageCertifications))
        {
            throw new NotFoundHttpException('Excepting mandatory parameters !');
        }
        $this->certificationsRepository->saveCertif($titreCertifications,$descriptionCertifications,$imageCertifications);
        return new JsonResponse(['status'=>'certifications created !'],Response::HTTP_CREATED);

    }

}
