-- DropForeignKey
ALTER TABLE `kpi_data` DROP FOREIGN KEY `KPI_Data_serviceId_fkey`;

-- DropIndex
DROP INDEX `KPI_Data_serviceId_fkey` ON `kpi_data`;

-- AlterTable
ALTER TABLE `kpi_data` MODIFY `serviceId` INTEGER NULL;

-- AlterTable
ALTER TABLE `system` ADD COLUMN `serviceId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `KPI_Data` ADD CONSTRAINT `KPI_Data_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `System` ADD CONSTRAINT `System_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
