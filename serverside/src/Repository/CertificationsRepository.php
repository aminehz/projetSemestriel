<?php

namespace App\Repository;

use App\Entity\Certifications;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Certifications>
 *
 * @method Certifications|null find($id, $lockMode = null, $lockVersion = null)
 * @method Certifications|null findOneBy(array $criteria, array $orderBy = null)
 * @method Certifications[]    findAll()
 * @method Certifications[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CertificationsRepository extends ServiceEntityRepository

{private $manager;
    public function __construct(ManagerRegistry $registry,EntityManagerInterface $manager)
    {
        parent::__construct($registry, Certifications::class);
        $this->manager=$manager;
    }

    public function add(Certifications $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Certifications $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function addCertif($titreCertifications,$descriptionCertifications,$imageCertifications)
    {
        $newCertif=new Certifications();
        $newCertif
            ->setTitreCertifications($titreCertifications)
            ->setDescriptionCertifications($descriptionCertifications)
            ->setImageCertifications($imageCertifications);

            
        $this->manager->persist($newCertif);
        $this->manager->flush();
    }

//    /**
//     * @return Certifications[] Returns an array of Certifications objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Certifications
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
