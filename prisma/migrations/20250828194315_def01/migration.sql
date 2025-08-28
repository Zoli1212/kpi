-- AlterTable
ALTER TABLE `company` MODIFY `incidentsReportable` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `system` MODIFY `incidentsReportable` BOOLEAN NOT NULL DEFAULT true;
