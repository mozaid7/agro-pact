-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "cropType" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);
