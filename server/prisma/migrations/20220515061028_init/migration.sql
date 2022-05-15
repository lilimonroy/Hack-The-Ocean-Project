-- CreateTable
CREATE TABLE "Denunciations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(255) NOT NULL,
    "domicilio" VARCHAR(255) NOT NULL,
    "location" VARCHAR(1500) NOT NULL,
    "description" VARCHAR(1500) NOT NULL,
    "culprit" VARCHAR(1500) NOT NULL,
    "detalles" VARCHAR(2000) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Denunciations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Denunciations_name_key" ON "Denunciations"("name");
