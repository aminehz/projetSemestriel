<?php

namespace App\Controller;

use App\Entity\Documents;
use App\Form\DocumentsType;
use App\Repository\DocumentsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/documents")
 */
class DocumentsController extends AbstractController
{

    private $documentsRepository;
    public function __construct(DocumentsRepository $documentsRepository)    
    { 
        $this->documentsRepository=$documentsRepository;
        
    }

    /**
     * @Route("/", name="app_documents_index", methods={"GET"})
     */
    public function index(DocumentsRepository $documentsRepository,SerializerInterface $serializer): Response
    {
        $documents=$documentsRepository->findAll();
        $jsonContent = $serializer->serialize($documents, 'json');
        return $this->json($jsonContent);
    }

    /**
     * @Route("/add", name="app_documents_add", methods={"POST"})
     */
    public function add(Request $request, DocumentsRepository $documentsRepository): JsonResponse
    {
        $data=json_decode($request->getContent(),true);

        $nom=$data['nom'];
        $prenom=$data['prenom'];
        $email=$data['email'];
        $document=$data['type_documents'];

        if(empty($nom)|| empty($prenom)|| empty($email)|| empty($document))
        {
            throw new NotFoundHttpException('Excepting mandatory parameters !');
        }
        $this->documentsRepository->saveDocuments($nom,$prenom,$email,$document);
        return new JsonResponse(['status'=>'Document created !'],Response::HTTP_CREATED);

    }
    

    /**
     * @Route("/{id}", name="app_documents_show", methods={"GET"})
     */
    public function show(Documents $document): Response
    {
        return $this->render('documents/show.html.twig', [
            'document' => $document,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_documents_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Documents $document, DocumentsRepository $documentsRepository): Response
    {
        $form = $this->createForm(DocumentsType::class, $document);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $documentsRepository->add($document, true);

            return $this->redirectToRoute('app_documents_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('documents/edit.html.twig', [
            'document' => $document,
            'form' => $form,
        ]);
    }

    
  
}
