<?php

namespace App\Entity;

use App\Repository\EtudiantsRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\InverseJoinColumn;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;

/**
 * @ORM\Entity(repositoryClass=EtudiantsRepository::class)
 */
class Etudiants
{     

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_etudiants;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom_etudiants;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    
   /**
     * Many Users have Many Groups.
     * @ManyToMany(targetEntity="Certifications")
     * @JoinTable(name="Etudiants_Certifications",
     *      joinColumns={@JoinColumn(name="etudiant_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="certification_id", referencedColumnName="id")}
     *      )
     * @var Collection<int,Certifications>
     */
     private $certifications; 

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomEtudiants(): ?string
    {
        return $this->nom_etudiants;
    }

    public function setNomEtudiants(string $nom_etudiants): self
    {
        $this->nom_etudiants = $nom_etudiants;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getPrenomEtudiants(): ?string
    {
        return $this->prenom_etudiants;
    }

    public function setPrenomEtudiants(string $prenom_etudiants): self
    {
        $this->prenom_etudiants = $prenom_etudiants;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getCertifications()
    {
        return $this->certifications;
    }

   


}
