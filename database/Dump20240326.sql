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
  `rol_usuario` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`numero_documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('44c9eb66-95b0-4f07-a9bd-98e34ee0af4b',1456893,'Juan','admin','$2a$10$VgplVYgCHKkkrXTntdIzLuXe5qAHiShgIqxrs2ikAAdcSIlCnE9N2','2024-03-15 13:51:29','2024-03-15 13:51:29');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aprendices`
--

LOCK TABLES `aprendices` WRITE;
/*!40000 ALTER TABLE `aprendices` DISABLE KEYS */;
INSERT INTO `aprendices` VALUES ('e85a77e0-f5cc-4fcc-9296-18fb87057462',1345678,'Cédula ','2000-01-01 00:00:00','Ciudad','1995-05-15 00:00:00','Cristian','Rendon','Masculino','Calle 123','Ciudad','Departamento',1234567,'3106331650',NULL,'brandon.rendon@utp.edu.co',NULL,685425,'Inteligencia Artifical','Tecnológico','Tecnólogo en inteligencia Artifical','2024-03-21 00:00:00','aprendiz','$2a$10$QZrWy3komi3EzVu6hV7dqO9S0hAnQRZ5vm923hp/.TFG.ojDExHDi','2024-03-06 22:22:37','2024-03-15 13:02:10'),('6debf70c-263b-4854-bb3e-fa606c2f11ad',2345678,'Cedula','2024-03-14 00:00:00','DOSQUE','2024-03-21 00:00:00','Pedro ','Pablonski','Masculino','qiuba','Dosque','Risa',3223232,'3245678906',NULL,'Pablo@gmail.com','',2899410,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-03-29 00:00:00','aprendiz','$2a$10$okzhLQ..jW6pcf8czo6NPOjTARzpqMaNOQKBB5LZltXq/LLIKzSb2','2024-03-15 15:05:09','2024-03-15 15:05:09'),('ccf27539-bd73-4bbb-9849-2ee3a4dfa296',3678936,'Cedula','2024-03-21 00:00:00','DOSQUE','2024-03-22 00:00:00','Raul','Beltran','Masculino','rocio','Dosque','Risa',NULL,'3106331650',NULL,'beltrananderson283@gmail.com',NULL,2753655,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2025-09-30 00:00:00','aprendiz','$2a$10$XV5qX/52nnIYl8QNwJuV4.wjQzegNlv2hJtLZLV52e5SVKfkJyFdS','2024-03-19 13:40:43','2024-03-19 13:40:43'),('9ba266e7-ac7a-44d9-9a5f-4997c49fa2b7',21456789,'Cedula','2024-03-15 00:00:00','DOSQUE','2024-03-14 00:00:00','Juan Pablo','Viallada','Masculino','qiuba','Dosque','Risa',3223232,'1234567890',NULL,'jabeltran6060@soy.sena.edu.co','',2899410,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-03-29 00:00:00','123456789','$2a$10$OniFgu.gS4NslV4P/Vc3UufGvjKY/afZ/Z73WFxqej/M45SqRjmYe','2024-03-07 01:10:15','2024-03-19 12:32:04'),('ee11432f-5f88-48bd-9efa-2a94d6304e4e',134567891,'Cédula ','2000-01-01 00:00:00','Ciudad','1995-05-15 00:00:00','Cristian David','Cantillo Niebles','Masculino','Calle 123','Ciudad','Departamento',1234567,'3106331650',NULL,'ccantillo@poligran.edu.co',NULL,2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-08-31 00:00:00','aprendiz','$2a$10$tInPcNIognZCdO8ZWQVTZOZo/xEIr7lp1DQ44MkPHy/a7TLU5Mfgq','2024-02-28 17:29:50','2024-03-15 13:26:46'),('693a111a-5150-4ad2-a1d3-0a3af1e79127',987654321,'CC','2020-02-02 00:00:00','Pereira','2024-03-21 00:00:00','Juan Pablo','Duque Vera','Masculino','Cra 25','Pereira','Risaralda',NULL,'3123123123','3123123122','sebastianduque04@gmail.com',NULL,2343242,'ADSO','Tecnológico','Tecnólogo en inteligencia Artifical','2023-12-12 00:00:00','aprendiz','$2a$10$MHlrXpx0AHpKcSpPNbAqH.9hVbhNXiJfIewdcLb8QjshU2RKwpD5e','2024-03-19 15:51:47','2024-03-19 15:51:47'),('9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Cédula ','2000-01-01 00:00:00','Ciudad','1995-05-15 00:00:00','Jhon Anderson','Beltran Echavarria','Masculino','Calle 123','Ciudad','Departamento',1234567,'3106331650',NULL,'andersonbeltrane283@gmail.com',NULL,2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-08-31 00:00:00','aprendiz','$2a$10$mRbVWc4UwrpW80WK/wb8ZuyuUq7PF/2A5XBIA4rRTYSUIlKix7wsS','2024-02-28 00:21:56','2024-03-19 16:00:26'),('4d8338cc-69fe-4246-937b-0486ad2ec201',1089378732,'Cedula','2024-03-19 00:00:00','DOSQUE','2024-03-13 00:00:00','Luz Ximena','Velasquez Martinez','Masculino','rocio','Dosque','Risa',NULL,'3106331650',NULL,'ximenavelasquez@gmail.com',NULL,2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-09-30 00:00:00','aprendiz','$2a$10$B08jcqKRbqQ3rPB7ZcAiIully.jBS1.t5AoY48wfbgQT.XJzQ7yAu','2024-03-23 18:23:00','2024-03-23 18:23:00');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacoras`
--

LOCK TABLES `bitacoras` WRITE;
/*!40000 ALTER TABLE `bitacoras` DISABLE KEYS */;
INSERT INTO `bitacoras` VALUES ('1c9d9425-b448-40f7-a7dd-017972330f8a','4','4s4Uy8Fu6-Anderson Beltran-Casos de Prueba-notes app.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-19 15:35:20','2024-03-19 15:38:13'),('507b974d-667f-4b32-8fb1-c1bb3574f8bf','3','Htsy-Z-eL-Bitacoras 2023.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-15 17:41:33','2024-03-15 17:43:19'),('6610f215-00a0-41ce-a92e-8c9c79438810','2','vhE2cipy_-BitÃ¡cora Formato Actualizado-JUN-2023.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-14 01:52:57','2024-03-14 02:09:05'),('7e61b81c-0f35-4abb-b521-3eb9c7177dfb','5','ktTlS9BHA-BitÃ¡cora Formato Actualizado-ENE-2022.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-19 17:43:02','2024-03-19 17:44:06'),('901dad5b-dbc3-41c6-b2ee-baab2d950d9a','1','zZ_ht76Dt-Bitacoras 2023.xlsx','ee11432f-5f88-48bd-9efa-2a94d6304e4e',134567891,'Cristian David','Cantillo Niebles',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-14 00:38:18','2024-03-15 13:28:04'),('b5221939-8b87-4737-93b6-541dfedb6e97','1','Nkn44rqIe-Anderson Beltran-Bitacoras 2023.xlsx','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'Análisis y Desarrollo de Software','',1,'2024-03-14 00:38:06','2024-03-14 00:56:08');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fichas`
--

LOCK TABLES `fichas` WRITE;
/*!40000 ALTER TABLE `fichas` DISABLE KEYS */;
INSERT INTO `fichas` VALUES ('2bf7119b-f85f-408e-bd3a-72825bb1cb60',98764,'Desarrollo Movil','Tecnológico','Tecnólogo en Desarrollo Movil','2024-03-29 00:00:00','2024-03-06 14:45:20','2024-03-06 14:45:20'),('43a61b01-ff1a-49d3-9692-58ebf93886ec',685425,'Inteligencia Artifical','Tecnológico','Tecnólogo en inteligencia Artifical','2024-03-21 00:00:00','2024-03-06 14:44:53','2024-03-06 14:44:53'),('04b83a09-b098-463c-bfa6-0ab3f4f063e7',2343242,'ADSO','Tecnológico','Tecnólogo en inteligencia Artifical','2023-12-12 00:00:00','2024-03-19 15:46:15','2024-03-19 15:46:15'),('fc25e791-3705-4215-bff7-43e67719b3ce',2456789,'Multimedia','Tecnológico','Tecnólogo en multimedia','2024-03-29 00:00:00','2024-03-15 15:47:16','2024-03-15 15:47:16'),('06e2e9b5-642b-4e37-bfef-9de632de8c2d',2618075,'Adso','Tecnología ','Te Adso','2024-03-22 00:00:00','2024-03-08 12:58:27','2024-03-08 12:58:27'),('61cc6f5c-e1ce-4461-a4dd-a064d377c682',2653755,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-09-30 00:00:00','2024-03-06 02:45:56','2024-03-06 02:45:56'),('16de0293-af6f-4ae6-a531-c51c565c913e',2753655,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2025-09-30 00:00:00','2024-03-06 02:46:53','2024-03-06 02:46:53'),('9dd5ff54-24ef-4ffc-b9ac-3816f78e24e5',2890345,'Animación Digital','Tecnológico','Tecnólogo en Animación Digital','2027-10-31 00:00:00','2024-03-06 02:47:54','2024-03-06 02:47:54'),('ebf9e616-116e-4ad1-8a01-93422a8e5f95',2899410,'Análisis y Desarrollo de Software','Tecnológico','Tecnólogo en Análisis y Desarrollo de Software','2024-03-29 00:00:00','2024-03-06 15:24:36','2024-03-06 15:24:36'),('a8394fe5-ecb6-4495-90b1-d4dc4fe36043',4567890,'Programación','Técnico','Técnico en Programación','2029-12-31 00:00:00','2024-03-06 02:48:36','2024-03-06 02:48:36');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructores`
--

LOCK TABLES `instructores` WRITE;
/*!40000 ALTER TABLE `instructores` DISABLE KEYS */;
INSERT INTO `instructores` VALUES ('29ef23f3-215c-4a7f-a814-e1fb100d5f4c',1234567,'CC','John Faber','Perez','jabeltran6060@misena.edu.co','1234567890',NULL,'2618075,2653755,2753655,2890345,4567890,2343242','instructor','$2a$10$ETpjER.WcdWPyb/qHv2HmuEIzq8vGRotKkwa/hP8LBnL82eboQLu6','2024-03-15 20:54:05','2024-03-19 15:46:15');
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
  `hora` time NOT NULL,
  `aprendiz` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `documento_aprendiz` int NOT NULL,
  `nombres_aprendiz` varchar(255) NOT NULL,
  `apellidos_aprendiz` varchar(255) NOT NULL,
  `numero_ficha_aprendiz` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_visita`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitas`
--

LOCK TABLES `visitas` WRITE;
/*!40000 ALTER TABLE `visitas` DISABLE KEYS */;
INSERT INTO `visitas` VALUES ('6ac13824-262f-4c7e-8c59-ccf8404eb910','tercera visita','2024-03-20','10:25:00','ccf27539-bd73-4bbb-9849-2ee3a4dfa296',3678936,'Raul','Beltran',2753655,'2024-03-19 15:19:28','2024-03-19 15:19:28'),('75805488-a095-4441-b63d-cb1064c11c66','primera visita','2024-03-20','00:04:00','9f4b6977-c586-4e33-9ae3-fc1ecf1e6656',1004670606,'Jhon Anderson','Beltran Echavarria',2653755,'2024-03-19 14:04:37','2024-03-19 15:12:08'),('a17d6de0-b56c-43f1-8477-aa4beef63d95','primera visita','2024-03-21','10:20:00','ee11432f-5f88-48bd-9efa-2a94d6304e4e',134567891,'Cristian David','Cantillo Niebles',2653755,'2024-03-19 15:15:15','2024-03-19 15:15:15');
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

-- Dump completed on 2024-03-26 23:41:25
