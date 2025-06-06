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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hashedPassword` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `modified` datetime(3) NOT NULL,
  `expired` datetime(3) DEFAULT NULL,
  `role` enum('REPORTER','APPROVER','VIEWER','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'VIEWER',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Bende Zsolt',NULL,'bende.zsolt@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.963','2025-05-22 09:41:11.963',NULL,'REPORTER'),(2,'Biró Csaba',NULL,'biró.csaba@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.971','2025-05-22 09:41:11.971',NULL,'REPORTER'),(3,'Bíró-Zs',NULL,'bíró-zs@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.976','2025-05-22 09:41:11.976',NULL,'REPORTER'),(4,'Ducsi Szilárd',NULL,'ducsi.szilárd@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.981','2025-05-22 09:41:11.981',NULL,'REPORTER'),(5,'Ecsedi Zoltán',NULL,'ecsedi.zoltán@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.985','2025-05-22 09:41:11.985',NULL,'REPORTER'),(6,'Földi Lajos',NULL,'földi.lajos@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.989','2025-05-22 09:41:11.989',NULL,'REPORTER'),(7,'Huszti János',NULL,'huszti.jános@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.993','2025-05-22 09:41:11.993',NULL,'REPORTER'),(8,'Kelemen Zsolt',NULL,'kelemen.zsolt@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:11.996','2025-05-22 09:41:11.996',NULL,'REPORTER'),(9,'Kevei Márk',NULL,'kevei.márk@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.000','2025-05-22 09:41:12.000',NULL,'REPORTER'),(10,'Kiss Ferenc',NULL,'kiss.ferenc@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.004','2025-05-22 09:41:12.004',NULL,'REPORTER'),(11,'Kun György',NULL,'kun.györgy@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.007','2025-05-22 09:41:12.007',NULL,'REPORTER'),(12,'Kállai Tamás',NULL,'kállai.tamás@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.011','2025-05-22 09:41:12.011',NULL,'REPORTER'),(13,'Lipcsei István',NULL,'lipcsei.istván@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.014','2025-05-22 09:41:12.014',NULL,'REPORTER'),(14,'Molnár József',NULL,'molnár.józsef@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.020','2025-05-22 09:41:12.020',NULL,'REPORTER'),(15,'Molnár Viktória Diána',NULL,'molnár.viktória.diána@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.023','2025-05-22 09:41:12.023',NULL,'REPORTER'),(16,'Olajos Imre',NULL,'olajos.imre@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.027','2025-05-22 09:41:12.027',NULL,'REPORTER'),(17,'Rónyai Zoltán',NULL,'rónyai.zoltán@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.030','2025-05-22 09:41:12.030',NULL,'REPORTER'),(18,'Szuromi József',NULL,'szuromi.józsef@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.034','2025-05-22 09:41:12.034',NULL,'REPORTER'),(19,'Sólyom József',NULL,'sólyom.józsef@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.038','2025-05-22 09:41:12.038',NULL,'REPORTER'),(20,'Török Zsolt',NULL,'torok.zsolt@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.041','2025-05-22 09:41:12.041',NULL,'REPORTER'),(21,'Vincze Csilla',NULL,'vincze.csilla@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.044','2025-05-22 09:41:12.044',NULL,'REPORTER'),(22,'Zilahi Zoltán',NULL,'zilahi.zoltán@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.048','2025-05-22 09:41:12.048',NULL,'REPORTER'),(23,'Zsipiné Szabó Hajnalka',NULL,'zsipiné.szabó.hajnalka@example.com','$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy','2025-05-22 09:41:12.053','2025-05-22 09:41:12.053',NULL,'REPORTER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-28 12:04:12
