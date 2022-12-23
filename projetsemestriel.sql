-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 23 déc. 2022 à 15:40
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projetsemestriel`
--

-- --------------------------------------------------------

--
-- Structure de la table `certifications`
--

DROP TABLE IF EXISTS `certifications`;
CREATE TABLE IF NOT EXISTS `certifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre_certifications` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_certifications` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_certifications` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `certifications`
--

INSERT INTO `certifications` (`id`, `titre_certifications`, `description_certifications`, `image_certifications`) VALUES
(1, 'Python', 'Le programme de spécialiste des technologies de l’information est un moyen pour les étudiants de valider les compétences informatiques de niveau d’entrée recherchées par les employeurs.', 'https://certiport.pearsonvue.com/getattachment/Blog/2021/September/Getting-to-Know-the-IT-Specialist-Certification/ITS-Logo-Stacked.png?lang=en-US&width=800&height=612&ext=.png'),
(2, 'Artificial Intelligence', 'Le programme de spécialiste des technologies de l’information est un moyen pour les étudiants de valider les compétences informatiques de niveau d’entrée recherchées par les employeurs.', 'https://certiport.pearsonvue.com/getattachment/Blog/2021/September/Getting-to-Know-the-IT-Specialist-Certification/ITS-Logo-Stacked.png?lang=en-US&width=800&height=612&ext=.png'),
(3, 'JavaScript', 'Le programme de spécialiste des technologies de l’information est un moyen pour les étudiants de valider les compétences informatiques de niveau d’entrée recherchées par les employeurs.', 'https://certiport.pearsonvue.com/getattachment/Blog/2021/September/Getting-to-Know-the-IT-Specialist-Certification/ITS-Logo-Stacked.png?lang=en-US&width=800&height=612&ext=.png'),
(4, 'Software Development', 'Le programme de spécialiste des technologies de l’information est un moyen pour les étudiants de valider les compétences informatiques de niveau d’entrée recherchées par les employeurs.', 'https://certiport.pearsonvue.com/getattachment/Blog/2021/September/Getting-to-Know-the-IT-Specialist-Certification/ITS-Logo-Stacked.png?lang=en-US&width=800&height=612&ext=.png'),
(5, 'Data Science', ' Ce certificat professionnel d’IBM aidera toute personne intéressée à poursuivre une carrière en science des données ou en apprentissage automatique à développer des compétences et une expérience pertinentes pour sa carrière.', 'https://pngimg.com/uploads/ibm/ibm_PNG19655.png'),
(6, 'Blockchain', ' Ce certificat professionnel d’IBM aidera toute personne intéressée à poursuivre une carrière en science des données ou en apprentissage automatique à développer des compétences et une expérience pertinentes pour sa carrière.', 'https://pngimg.com/uploads/ibm/ibm_PNG19655.png'),
(7, 'Cloud', ' Ce certificat professionnel d’IBM aidera toute personne intéressée à poursuivre une carrière en science des données ou en apprentissage automatique à développer des compétences et une expérience pertinentes pour sa carrière.', 'https://pngimg.com/uploads/ibm/ibm_PNG19655.png'),
(8, 'HealthCare', ' Ce certificat professionnel d’IBM aidera toute personne intéressée à poursuivre une carrière en science des données ou en apprentissage automatique à développer des compétences et une expérience pertinentes pour sa carrière.', 'https://pngimg.com/uploads/ibm/ibm_PNG19655.png'),
(9, 'AWS', 'AWS est une plate-forme informatique très populaire qui fournit une infrastructure cloud que les entreprises peuvent utiliser pour les services de stockage, de mise en réseau, de base de données et d’analyse.', 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'),
(10, 'PMI', 'La certification PMI Project Management Ready™ est une nouvelle façon pour les étudiants de s’immerger dans l’industrie de la gestion de projet et de s’impliquer dans cette communauté passionnée de professionnels. ', 'https://seeklogo.com/images/P/pmi-logo-8BE2BA928B-seeklogo.com.png'),
(11, 'android', 'La certification android est une certification dédié pour les etudiants qui sont developpé une application android pour valider leur competences.', 'https://pngimg.com/uploads/android_logo/android_logo_PNG27.png');

-- --------------------------------------------------------

--
-- Structure de la table `documents`
--

DROP TABLE IF EXISTS `documents`;
CREATE TABLE IF NOT EXISTS `documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_documents` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `etudiants`
--

DROP TABLE IF EXISTS `etudiants`;
CREATE TABLE IF NOT EXISTS `etudiants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_etudiants` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom_etudiants` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `etudiants`
--

INSERT INTO `etudiants` (`id`, `nom_etudiants`, `password`, `prenom_etudiants`, `email`) VALUES
(1, 'khalil', 'khalil', 'khalil', 'khalil@khalil.com');

-- --------------------------------------------------------

--
-- Structure de la table `etudiants_certifications`
--

DROP TABLE IF EXISTS `etudiants_certifications`;
CREATE TABLE IF NOT EXISTS `etudiants_certifications` (
  `etudiant_id` int(11) NOT NULL,
  `certification_id` int(11) NOT NULL,
  PRIMARY KEY (`etudiant_id`,`certification_id`),
  KEY `IDX_33A1FAEBDDEAB1A3` (`etudiant_id`),
  KEY `IDX_33A1FAEBCB47068A` (`certification_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `etudiants_certifications`
--

INSERT INTO `etudiants_certifications` (`etudiant_id`, `certification_id`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `stages`
--

DROP TABLE IF EXISTS `stages`;
CREATE TABLE IF NOT EXISTS `stages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre_stage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_stage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_stage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom_poste` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `stages`
--

INSERT INTO `stages` (`id`, `titre_stage`, `description_stage`, `image_stage`, `nom_poste`) VALUES
(1, 'Poste : Front End', 'c\'est un poste Front End destiné pour les PFE ; technologie React Js ', 'https://www.4c.tn/Content/images/profile/2252_proxym.png', 'https://www.proxym-group.com/'),
(2, 'Poste BackEnd', 'poste backend avec les technologies : React Js', 'https://plurielle.tn/pro/wp-content/uploads/2022/06/photo-1424.png', 'https://www.satoripop.com/'),
(3, 'Front End', 'front end PFE', 'https://anypli.com/logoFb.png', 'https://anypli.com/fr_fr/');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `etudiants_certifications`
--
ALTER TABLE `etudiants_certifications`
  ADD CONSTRAINT `FK_33A1FAEBCB47068A` FOREIGN KEY (`certification_id`) REFERENCES `certifications` (`id`),
  ADD CONSTRAINT `FK_33A1FAEBDDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiants` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
