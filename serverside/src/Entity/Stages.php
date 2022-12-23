<?php

namespace App\Entity;

use App\Repository\StagesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StagesRepository::class)
 */
class Stages
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
    private $titre_stage;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description_stage;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image_stage;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_poste;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreStage(): ?string
    {
        return $this->titre_stage;
    }

    public function setTitreStage(string $titre_stage): self
    {
        $this->titre_stage = $titre_stage;

        return $this;
    }

    public function getDescriptionStage(): ?string
    {
        return $this->description_stage;
    }

    public function setDescriptionStage(string $description_stage): self
    {
        $this->description_stage = $description_stage;

        return $this;
    }

    public function getImageStage(): ?string
    {
        return $this->image_stage;
    }

    public function setImageStage(string $image_stage): self
    {
        $this->image_stage = $image_stage;

        return $this;
    }

    public function getNomPoste(): ?string
    {
        return $this->nom_poste;
    }

    public function setNomPoste(string $nom_poste): self
    {
        $this->nom_poste = $nom_poste;

        return $this;
    }
}
