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
     * @Route("/", name="app_user_index", methods={"GET"})
     */
    public function index(UserRepository $usersRepository,SerializerInterface $serializer): Response
    {
        $users=$usersRepository->findAll();
        $jsonContent = $serializer->serialize($users, 'json');
        return $this->json($jsonContent);
    }
     
      /**
     * @Route("/verification", name="app_user_verification", methods={"GET","POST"})
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

    /**
     * @Route("/addUser", name="app_user_addUser", methods={"POST","GET"})
     */
    public function addUser(Request $request, UserRepository $userRepository): JsonResponse
    {
        $data=json_decode($request->getContent(),true);
        

        
        $Email=$data['Email'];
        $password=$data['password'];

        if(empty($Email)|| empty($password))
        {
            throw new NotFoundHttpException('Excepting mandatory parameters !');
        }
        $this->userRepository->saveUser($Email,$password);
        return new JsonResponse(['status'=>'user created !'],Response::HTTP_CREATED);

    }
     

    
}
