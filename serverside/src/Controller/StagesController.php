<?php

namespace App\Controller;

use App\Entity\Stages;
use App\Form\StagesType;
use App\Repository\StagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/stages")
 */
class StagesController extends AbstractController

{       
    private $stagesRepository;
public function __construct(StagesRepository $stagesRepository)
{
   $this->stagesRepository=$stagesRepository;
}


/**
* @Route("/email")
* @param MailerInterface $mailer
* @return Response
*/

     public function sendEmail(MailerInterface $mailer,Request $request,StagesRepository $stagesRepository)
     {   $data=json_decode($request->getContent(),true);
         $nom=$data['nom'];
         $prenom=$data['prenom'];
         $email=$data['email'];
         $cv=$data['cv'];



        $email=(new Email())
        ->from(new Address($email,'Mailtrap'))
        ->to('amine.hz.hz.98@gmail.com')
        ->subject("Demande du stage $nom $prenom")
        ->text($cv);
        $mailer->send($email);
        
        return new Response('Email was sent');
     }







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
