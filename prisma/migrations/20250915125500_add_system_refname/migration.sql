-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_handlerId_fkey`;

-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_reporterId_fkey`;

-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_systemId_fkey`;

-- DropIndex
DROP INDEX `Incident_companyId_fkey` ON `incident`;

-- DropIndex
DROP INDEX `Incident_creatorId_fkey` ON `incident`;

-- DropIndex
DROP INDEX `Incident_handlerId_fkey` ON `incident`;

-- DropIndex
DROP INDEX `Incident_reporterId_fkey` ON `incident`;

-- DropIndex
DROP INDEX `Incident_systemId_fkey` ON `incident`;

-- AlterTable
ALTER TABLE `incident` MODIFY `reporterId` INTEGER NULL,
    MODIFY `systemId` INTEGER NULL,
    MODIFY `companyId` INTEGER NULL,
    MODIFY `description` VARCHAR(300) NOT NULL,
    MODIFY `creatorId` VARCHAR(200) NULL,
    MODIFY `handlerId` VARCHAR(200) NULL,
    MODIFY `cause` VARCHAR(300) NULL;

-- AlterTable
ALTER TABLE `system` ADD COLUMN `refName` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_reporterId_fkey` FOREIGN KEY (`reporterId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_systemId_fkey` FOREIGN KEY (`systemId`) REFERENCES `System`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
