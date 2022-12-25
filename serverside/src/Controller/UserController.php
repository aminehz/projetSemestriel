<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    private $userRepository;
    public function __construct(UserRepository $userRepository)    
    { 
        $this->userRepository=$userRepository;
        
    }

      /**
     * @Route("/verification", name="app_documents", methods={"POST"})
     */
    public function add(Request $request, UserRepository $userRepository,SerializerInterface $serializer): JsonResponse
    {
        $data=json_decode($request->getContent(),true);

        $email=$data['email'];
        $password=$data['password'];
        $users = $userRepository->findAll();
        $jsonContent = $serializer->serialize($users, 'json');
        return $this->json($jsonContent);

        

    }

    
}
