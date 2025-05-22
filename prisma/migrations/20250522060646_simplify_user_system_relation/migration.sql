/*
  Warnings:

  - You are about to drop the column `creatorId` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `criticality` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `handlerId` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `reporterId` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `urgency` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `approvalDate` on the `kpi_data` table. All the data in the column will be lost.
  - You are about to drop the column `approverId` on the `kpi_data` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_handlerId_fkey`;

-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_reporterId_fkey`;

-- DropForeignKey
ALTER TABLE `kpi_data` DROP FOREIGN KEY `KPI_Data_approverId_fkey`;

-- DropForeignKey
ALTER TABLE `system` DROP FOREIGN KEY `System_analystId_fkey`;

-- DropForeignKey
ALTER TABLE `system` DROP FOREIGN KEY `System_applicationOperatorId_fkey`;

-- DropForeignKey
ALTER TABLE `system` DROP FOREIGN KEY `System_infrastructureOperatorId_fkey`;

-- DropForeignKey
ALTER TABLE `system` DROP FOREIGN KEY `System_platformOperatorId_fkey`;

-- DropIndex
DROP INDEX `Incident_creatorId_fkey` ON `incident`;

-- DropIndex
DROP INDEX `Incident_handlerId_fkey` ON `incident`;

-- DropIndex
DROP INDEX `Incident_reporterId_fkey` ON `incident`;

-- DropIndex
DROP INDEX `KPI_Data_approverId_fkey` ON `kpi_data`;

-- DropIndex
DROP INDEX `System_analystId_fkey` ON `system`;

-- DropIndex
DROP INDEX `System_applicationOperatorId_fkey` ON `system`;

-- DropIndex
DROP INDEX `System_infrastructureOperatorId_fkey` ON `system`;

-- DropIndex
DROP INDEX `System_platformOperatorId_fkey` ON `system`;

-- AlterTable
ALTER TABLE `incident` DROP COLUMN `creatorId`,
    DROP COLUMN `criticality`,
    DROP COLUMN `description`,
    DROP COLUMN `handlerId`,
    DROP COLUMN `reporterId`,
    DROP COLUMN `type`,
    DROP COLUMN `urgency`;

-- AlterTable
ALTER TABLE `kpi_data` DROP COLUMN `approvalDate`,
    DROP COLUMN `approverId`;

-- CreateTable
CREATE TABLE `_UserSystems` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserSystems_AB_unique`(`A`, `B`),
    INDEX `_UserSystems_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserSystems` ADD CONSTRAINT `_UserSystems_A_fkey` FOREIGN KEY (`A`) REFERENCES `System`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserSystems` ADD CONSTRAINT `_UserSystems_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
