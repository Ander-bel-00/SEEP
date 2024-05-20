-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: seep
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id_admin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `numero_documento` int NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `rol_usuario` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`numero_documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('10614c51-155e-496f-ab3d-a2889d6d942f',1456893,'Cristian David','Cantillo Niebles','admin','$2a$10$RmM/TtIsz3Z7MDuf55Xd8.uTZ8.wFF0lUfaVB38wtsnVtPOouk8u2','2024-05-18 03:36:55','2024-05-18 03:36:55');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aprendices`
--

DROP TABLE IF EXISTS `aprendices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aprendices` (
  `id_aprendiz` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `numero_documento` int NOT NULL,
  `tipo_documento` varchar(255) NOT NULL,
  `fecha_expedicion` datetime NOT NULL,
  `lugar_expedicion` varchar(255) NOT NULL,
  `fecha_nacimiento` datetime NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `direccion_domicilio` varchar(255) NOT NULL,
  `municipio_domicilio` varchar(255) NOT NULL,
  `departamento_domicilio` varchar(255) NOT NULL,
  `telefonofijo_Contacto` int DEFAULT NULL,
  `numero_celular1` varchar(255) NOT NULL,
  `numero_celular2` varchar(255) DEFAULT NULL,
  `correo_electronico1` varchar(255) NOT NULL,
  `correo_electronico2` varchar(255) DEFAULT NULL,
  `numero_ficha` int NOT NULL,
  `programa_formacion` varchar(255) NOT NULL,
  `nivel_formacion` varchar(255) NOT NULL,
  `titulo_obtenido` varchar(255) NOT NULL,
  `fecha_fin_lectiva` datetime NOT NULL,
  `rol_usuario` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`numero_documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aprendices`
--

LOCK TABLES `aprendices` WRITE;
/*!40000 ALTER TABLE `aprendices` DISABLE KEYS */;
INSERT INTO `aprendices` VALUES ('e85a77e0-f5cc-4fcc-9296-18fb87057462',1345678,'Cédula ','2000-01-01 00:00:00','Ciudad','1995-05-15 00:00:00','Cristian','Rendon','Masculino','Calle 123','Ciudad','Departamento',1234567,'3106331650',NULL,'brandon.rendon@utp.edu.co',NULL,685425,'Inteligencia Artifical','Tecnológico','Tecnólogo en inteligencia Artifical','2024-03-21 00:00:00','aprendiz','$2a$10$QZrWy3komi3EzVu6hV7dqO9S0hAnQRZ5vm923hp/.TFG.ojDExHDi','2024-03-06 22:22:37','2024-03-15 13:02:10'),('6debf70c-263b-4854-bb3e-fa606c2f11ad',2345678,'Cedula','2024-03-14 00:00:00','DOSQUE','2024-03-21 00:00:00','Pedro ','Pablonski','Masculino','qiuba','Dosque','Risa',3223232,'3245678906',NULL,'Pablo@gmail.com','',2899410,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-03-29 00:00:00','aprendiz','$2a$10$okzhLQ..jW6pcf8czo6NPOjTARzpqMaNOQKBB5LZltXq/LLIKzSb2','2024-03-15 15:05:09','2024-03-15 15:05:09'),('16449268-fd05-40b9-9b9d-66db9d054f09',3456789,'cedula','2024-04-24 00:00:00','DOSQUE','2024-04-26 00:00:00','Andres','Beltran','Masculino','rocio','Dosque','Risa',NULL,'3106331350',NULL,'jabeltran6060@misena.edu.co',NULL,2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-09-30 00:00:00','aprendiz','$2a$10$bPK7Cy08uM17tQ9bAH7Zz.12VZAVDDR9ubg6J/ZxRr0bdjs5tNkui','2024-04-02 17:11:54','2024-04-02 17:11:54'),('22de01aa-bd97-449f-ba27-b3c8c2432eed',3678936,'Cédula ','2000-01-01 00:00:00','Ciudad','1995-05-15 00:00:00','Cristian','Rendon','Masculino','Calle 123','Ciudad','Departamento',1234567,'3106331650',NULL,'jabeltran6060@soy.sena.edu.co',NULL,2753655,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2025-09-30 00:00:00','aprendiz','$2a$10$p8mnN8KIxQ2kHZphHqbbi.ziprl.wLiY4wf/WAKq05xvlyOY0nTbq','2024-03-28 01:29:44','2024-03-28 01:29:44'),('9ba266e7-ac7a-44d9-9a5f-4997c49fa2b7',21456789,'Cedula','2024-03-15 00:00:00','DOSQUE','2024-03-14 00:00:00','Juan Pablo','Viallada','Masculino','qiuba','Dosque','Risa',3223232,'1234567890',NULL,'jabeltran6060@soy.sena.edu.co','',2899410,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-03-29 00:00:00','123456789','$2a$10$NkPetEUeRj6FOY/J4nb7MuRsIIH69ZhV7BCJLNXKf4hzKCJUK893y','2024-03-07 01:10:15','2024-03-27 17:25:22'),('ee11432f-5f88-48bd-9efa-2a94d6304e4e',134567891,'Cédula ','2000-01-01 00:00:00','Ciudad','1995-05-15 00:00:00','Cristian David','Cantillo Niebles','Masculino','Calle 123','Ciudad','Departamento',1234567,'3106331650',NULL,'ccantillo@poligran.edu.co',NULL,2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-08-31 00:00:00','aprendiz','$2a$10$tInPcNIognZCdO8ZWQVTZOZo/xEIr7lp1DQ44MkPHy/a7TLU5Mfgq','2024-02-28 17:29:50','2024-03-15 13:26:46'),('693a111a-5150-4ad2-a1d3-0a3af1e79127',987654321,'CC','2020-02-02 00:00:00','Pereira','2024-03-21 00:00:00','Juan Pablo','Duque Vera','Masculino','Cra 25','Pereira','Risaralda',NULL,'3123123123','3123123122','sebastianduque04@gmail.com',NULL,2343242,'ADSO','Tecnológico','Tecnólogo en inteligencia Artifical','2023-12-12 00:00:00','aprendiz','$2a$10$MHlrXpx0AHpKcSpPNbAqH.9hVbhNXiJfIewdcLb8QjshU2RKwpD5e','2024-03-19 15:51:47','2024-03-19 15:51:47'),('9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Cédula ','2000-01-01 00:00:00','Ciudad','1995-05-15 00:00:00','Jhon Anderson','Beltran Echavarria','Masculino','Calle 123','Ciudad','Departamento',1234567,'3106331650',NULL,'andersonbeltrane283@gmail.com',NULL,2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-08-31 00:00:00','aprendiz','$2a$10$zZrlTiLEe2ejbj.OePJOMuq9XyjoD1IowlpLMbZtXd5eBWj3QRi26','2024-02-28 00:21:56','2024-05-15 15:38:41');
/*!40000 ALTER TABLE `aprendices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bitacoras`
--

DROP TABLE IF EXISTS `bitacoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bitacoras` (
  `id_bitacora` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `numero_de_bitacora` varchar(255) NOT NULL,
  `archivo` varchar(255) NOT NULL,
  `id_aprendiz` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `numero_documento` int NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `numero_ficha` int NOT NULL,
  `programa_formacion` varchar(255) NOT NULL,
  `observaciones` text,
  `estado` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_bitacora`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacoras`
--

LOCK TABLES `bitacoras` WRITE;
/*!40000 ALTER TABLE `bitacoras` DISABLE KEYS */;
INSERT INTO `bitacoras` VALUES ('1c9d9425-b448-40f7-a7dd-017972330f8a','4','4s4Uy8Fu6-Anderson Beltran-Casos de Prueba-notes app.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-19 15:35:20','2024-03-19 15:38:13'),('29010037-917f-454e-9d62-42f0660c572f','7','jlvLZMHGs-BitÃ¡cora Formato Actualizado-ENE-2022.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-04-06 21:18:45','2024-05-03 21:06:07'),('507b974d-667f-4b32-8fb1-c1bb3574f8bf','3','Htsy-Z-eL-Bitacoras 2023.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-15 17:41:33','2024-03-15 17:43:19'),('6610f215-00a0-41ce-a92e-8c9c79438810','2','vhE2cipy_-BitÃ¡cora Formato Actualizado-JUN-2023.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-14 01:52:57','2024-03-14 02:09:05'),('7e61b81c-0f35-4abb-b521-3eb9c7177dfb','5','ktTlS9BHA-BitÃ¡cora Formato Actualizado-ENE-2022.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-19 17:43:02','2024-03-19 17:44:06'),('901dad5b-dbc3-41c6-b2ee-baab2d950d9a','1','zZ_ht76Dt-Bitacoras 2023.xlsx','ee11432f-5f88-48bd-9efa-2a94d6304e4e',134567891,'Cristian David','Cantillo Niebles',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-14 00:38:18','2024-03-15 13:28:04'),('b5221939-8b87-4737-93b6-541dfedb6e97','1','Nkn44rqIe-Anderson Beltran-Bitacoras 2023.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-14 00:38:06','2024-03-14 00:56:08'),('b684c2ff-a28b-4dda-b029-bd5f6e314132','6','D2hYfm7gA-BitÃ¡cora Formato Actualizado-ENE-2022.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-04-02 17:22:39','2024-04-02 17:25:03');
/*!40000 ALTER TABLE `bitacoras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos` (
  `id_documento` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tipo_documento` varchar(255) NOT NULL,
  `archivo` varchar(255) NOT NULL,
  `id_aprendiz` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `numero_documento` int NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `numero_ficha` int NOT NULL,
  `programa_formacion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
INSERT INTO `documentos` VALUES ('104d4293-5c34-4261-ad1a-efbecf70cc60','Carnet Destruido','mHwnabKt2-Anderson Beltran-Proyecto Ingles.docx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','2024-03-19 15:24:21','2024-03-19 15:24:21'),('27b1e61f-8a7c-46ec-9efe-b210d018c1f4','Documento de identidad','_yraPrZXj-TareanNonn2___8065caddd329f43___.png','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','2024-03-14 00:57:10','2024-03-14 00:57:10'),('3b6acc52-8970-4bfb-85bf-7ef5eecc0d38','Documento de identidad','6IWBCICFn-TareanNonn2___8065caddd329f43___.png','ee11432f-5f88-48bd-9efa-2a94d6304e4e',134567891,'Cristian David','Cantillo Niebles',2653755,'Análisis y Desarrollo de Software','2024-03-14 00:46:38','2024-03-14 00:46:38'),('6490b75f-acbd-4aa7-93f7-3d89ef43f61a','Documento de identidad','ep_mgJaAr-TareanNonn2___8065caddd329f43___.png','9ba266e7-ac7a-44d9-9a5f-4997c49fa2b7',21456789,'Juan Pablo','Viallada',2899410,'Análisis y Desarrollo de Software','2024-03-14 00:46:32','2024-03-14 00:46:32'),('86aa4f6a-9cea-40ea-a246-f430f68e614b','Carnet Destruido','1Z3fonwUG-Anderson Beltran-A Mind for Numbers short presentation (1).pptx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','2024-03-19 15:25:32','2024-03-19 15:25:32'),('d6d410c4-9734-4ed6-9010-f58b38935c22','Documento de Identidad','6UWgipKIk-IMG-20240321-WA0000.jpg','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','2024-03-21 19:01:57','2024-03-21 19:01:57');
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fichas`
--

DROP TABLE IF EXISTS `fichas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fichas` (
  `id_ficha` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `numero_ficha` int NOT NULL,
  `programa_formacion` varchar(255) NOT NULL,
  `nivel_formacion` varchar(255) NOT NULL,
  `titulo_obtenido` varchar(255) NOT NULL,
  `fecha_fin_lectiva` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`numero_ficha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fichas`
--

LOCK TABLES `fichas` WRITE;
/*!40000 ALTER TABLE `fichas` DISABLE KEYS */;
INSERT INTO `fichas` VALUES ('4c8fdbfa-6165-4b44-851f-1e1463ad57bb',45678,'Inteligencia Artifical','Tecnológico','Tecnólogo en inteligencia Artifical','2024-04-22 00:00:00','2024-04-02 16:54:24','2024-04-02 16:54:24'),('2bf7119b-f85f-408e-bd3a-72825bb1cb60',98764,'Desarrollo Movil','Tecnológico','Tecnólogo en Desarrollo Movil','2024-03-29 00:00:00','2024-03-06 14:45:20','2024-03-06 14:45:20'),('43a61b01-ff1a-49d3-9692-58ebf93886ec',685425,'Inteligencia Artifical','Tecnológico','Tecnólogo en inteligencia Artifical','2024-03-21 00:00:00','2024-03-06 14:44:53','2024-03-06 14:44:53'),('04b83a09-b098-463c-bfa6-0ab3f4f063e7',2343242,'ADSO','Tecnológico','Tecnólogo en inteligencia Artifical','2023-12-12 00:00:00','2024-03-19 15:46:15','2024-03-19 15:46:15'),('fc25e791-3705-4215-bff7-43e67719b3ce',2456789,'Multimedia','Tecnológico','Tecnólogo en multimedia','2024-03-29 00:00:00','2024-03-15 15:47:16','2024-03-15 15:47:16'),('06e2e9b5-642b-4e37-bfef-9de632de8c2d',2618075,'Adso','Tecnología ','Te Adso','2024-03-22 00:00:00','2024-03-08 12:58:27','2024-03-08 12:58:27'),('61cc6f5c-e1ce-4461-a4dd-a064d377c682',2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-09-30 00:00:00','2024-03-06 02:45:56','2024-03-06 02:45:56'),('16de0293-af6f-4ae6-a531-c51c565c913e',2753655,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2025-09-30 00:00:00','2024-03-06 02:46:53','2024-03-06 02:46:53'),('9dd5ff54-24ef-4ffc-b9ac-3816f78e24e5',2890345,'Animación Digital','Tecnológico','Tecnólogo en Animación Digital','2027-10-31 00:00:00','2024-03-06 02:47:54','2024-03-06 02:47:54'),('ebf9e616-116e-4ad1-8a01-93422a8e5f95',2899410,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-03-29 00:00:00','2024-03-06 15:24:36','2024-03-06 15:24:36'),('bdbe3d96-3586-449f-bada-5a61ec342d6f',3464646,'Inteligencia Artifical','Tecnológico','Tecnólogo en inteligencia Artifical','2024-04-24 00:00:00','2024-04-02 17:10:10','2024-04-02 17:10:10'),('a8394fe5-ecb6-4495-90b1-d4dc4fe36043',4567890,'Programación','Técnico','Técnico en Programación','2029-12-31 00:00:00','2024-03-06 02:48:36','2024-03-06 02:48:36');
/*!40000 ALTER TABLE `fichas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instructores`
--

DROP TABLE IF EXISTS `instructores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instructores` (
  `id_instructor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `numero_documento` int NOT NULL,
  `tipo_documento` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `correo_electronico1` varchar(255) NOT NULL,
  `numero_celular1` varchar(255) NOT NULL,
  `numero_celular2` varchar(255) DEFAULT NULL,
  `fichas_asignadas` varchar(255) DEFAULT NULL,
  `rol_usuario` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`numero_documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructores`
--

LOCK TABLES `instructores` WRITE;
/*!40000 ALTER TABLE `instructores` DISABLE KEYS */;
INSERT INTO `instructores` VALUES ('29ef23f3-215c-4a7f-a814-e1fb100d5f4c',1234567,'CC','John Faber','Cortez','jabeltran6060@misena.edu.co','1234567890',NULL,'2618075,2653755,2753655,2890345,4567890,2343242,45678,3464646','instructor','$2a$10$4jwyAO1X/a96BkkyU8wAOOiOsioDyVUTkVtct5nAW/p7.jEffNzTa','2024-03-15 20:54:05','2024-04-02 17:31:22'),('23b08dbd-d4b1-4c90-8d76-751f5c4faaad',1234567892,'cedula','Andres','Beltran','jabeltran6060@misena.edu.co','3106331650',NULL,'2618075,2653755','instructor','$2a$10$pBvUU6dJEDYKFpdIrThLseOwxpi0xmmeQZgQcqjCJL3XvJb.MzJGK','2024-04-02 16:33:24','2024-04-02 16:33:24');
/*!40000 ALTER TABLE `instructores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitas`
--

DROP TABLE IF EXISTS `visitas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitas` (
  `id_visita` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tipo_visita` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time DEFAULT NULL,
  `lugar_visita` varchar(255) NOT NULL,
  `modalidad_visita` varchar(255) NOT NULL,
  `aprendiz` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `documento_aprendiz` int NOT NULL,
  `nombres_aprendiz` varchar(255) NOT NULL,
  `apellidos_aprendiz` varchar(255) NOT NULL,
  `numero_ficha_aprendiz` int NOT NULL,
  `programa_formacion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_visita`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitas`
--

LOCK TABLES `visitas` WRITE;
/*!40000 ALTER TABLE `visitas` DISABLE KEYS */;
INSERT INTO `visitas` VALUES ('0662e3ca-cc15-495f-9ae5-f81c2a5e0f58','Primera visita','2024-05-17','18:30:00','19:29:00','SENA','Presencial','16449268-fd05-40b9-9b9d-66db9d054f09',3456789,'Andres','Beltran',2653755,'Análisis y Desarrollo de Software','2024-05-17 23:30:09','2024-05-17 23:30:09'),('28c69c58-3735-4995-a33c-f2fdd84caeab','Primera visita','2024-05-15','10:29:00','13:30:00','SENA','Presencial','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','2024-05-15 15:30:32','2024-05-15 15:30:32');
/*!40000 ALTER TABLE `visitas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-20  8:05:36
