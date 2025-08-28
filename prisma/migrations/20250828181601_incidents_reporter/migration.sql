/*
  Warnings:

  - You are about to drop the column `incidentReporter` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `incidentReporter`,
    ADD COLUMN `incidentsReporter` BOOLEAN NOT NULL DEFAULT false;
