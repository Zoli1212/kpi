-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kpinext
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
-- Table structure for table `_usertoitems`
--

DROP TABLE IF EXISTS `_usertoitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_usertoitems` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_UserToItems_AB_unique` (`A`,`B`),
  KEY `_UserToItems_B_index` (`B`),
  CONSTRAINT `_UserToItems_A_fkey` FOREIGN KEY (`A`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_UserToItems_B_fkey` FOREIGN KEY (`B`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_usertoitems`
--

LOCK TABLES `_usertoitems` WRITE;
/*!40000 ALTER TABLE `_usertoitems` DISABLE KEYS */;
INSERT INTO `_usertoitems` VALUES (3,1),(73,2),(48,3),(69,3),(70,3),(8,4),(10,4),(11,4),(12,4),(13,4),(14,4),(35,4),(50,4),(71,4),(80,4),(81,4),(22,5),(27,5),(31,5),(43,5),(72,5),(53,6),(89,6),(4,7),(63,7),(2,8),(64,8),(68,8),(74,8),(87,9),(88,9),(98,9),(99,9),(47,10),(9,11),(21,11),(32,11),(37,11),(38,11),(39,11),(41,11),(66,11),(75,11),(79,11),(91,11),(95,11),(96,11),(100,11),(6,12),(7,12),(25,12),(51,12),(52,12),(54,12),(55,12),(56,12),(57,12),(58,12),(59,12),(60,12),(61,12),(82,12),(33,13),(34,13),(40,13),(1,14),(2,14),(5,14),(86,14),(97,14),(83,15),(36,16),(67,16),(28,17),(29,17),(30,17),(42,17),(92,17),(93,17),(76,18),(77,18),(78,18),(85,18),(23,19),(24,19),(65,19),(15,20),(16,20),(17,20),(18,20),(19,20),(20,20),(84,20),(62,21),(44,22),(45,22),(46,22),(49,22),(90,22),(94,22),(26,23);
/*!40000 ALTER TABLE `_usertoitems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-28 12:04:13
