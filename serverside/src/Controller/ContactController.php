<?php

namespace App\Controller;

use App\Repository\ContactRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
// src/Controller/MailerController.php
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;


/**
 * @Route("/contact")
 */
class ContactController extends AbstractController
{

private $contactRepository;
public function __construct(ContactRepository $contactRepository)
{
   $this->contactRepository=$contactRepository;
}


/**
* @Route("/email")
* @param MailerInterface $mailer
* @return Response
*/

     public function sendEmail(MailerInterface $mailer,Request $request,ContactRepository $contactRepository)
     {   $data=json_decode($request->getContent(),true);
         $nom=$data['nom'];
         $prenom=$data['prenom'];
         $email=$data['email'];
         $message=$data['message'];



        $email=(new Email())
        ->from(new Address($email, 'Mailtrap'))
        ->to('amine.hz.hz.98@gmail.com')
        ->subject("Contact du $nom $prenom")
        ->text($message);
        $mailer->send($email);
        
        return new Response('Email was sent');
     }



}
