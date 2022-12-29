<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
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
     * @Route("/verification", name="app_documents", methods={"GET","POST"})
     */
    public function verification(Request $request, UserRepository $userRepository,SerializerInterface $serializer): JsonResponse
    {
        $data=json_decode($request->getContent(),true);
       

        $email=$data['email'];
        $password=$data['password'];
        $user = $userRepository->findOneBy(['Email'=>$email]);
        
        if(!empty($user))
        {
            if($user->getPassword() == $password)
            {
                return $this->json(['user'=> $user,'message'=>"success"]);
            }
            else
             {
                $jsonContent = $serializer->serialize($user, 'json');
                return $this->json(['user'=> $jsonContent,'message'=>"failed"]);

            }
        }
        else 
        {
            return $this->json(['message'=>"donnees invalide."]);
        }

        

    }
     

    
}
