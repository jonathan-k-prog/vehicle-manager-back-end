/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `PartModel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `PartModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PartType_name_key";

-- AlterTable
ALTER TABLE "PartModel" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PartModel_code_key" ON "PartModel"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_code_key" ON "Vehicle"("code");
