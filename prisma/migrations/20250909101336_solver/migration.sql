-- AlterTable
ALTER TABLE `incident` ADD COLUMN `solver` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `system` ADD COLUMN `onlyKpi` BOOLEAN NOT NULL DEFAULT true;
