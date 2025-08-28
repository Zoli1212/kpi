-- AlterTable
ALTER TABLE `company` ADD COLUMN `incidentsReportable` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `system` ADD COLUMN `incidentsReportable` BOOLEAN NOT NULL DEFAULT false;
