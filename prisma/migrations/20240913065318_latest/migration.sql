-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "cashbackAmount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "cashbackExpiry" TIMESTAMP(3),
ADD COLUMN     "cashbackStatus" TEXT NOT NULL DEFAULT 'inactive';
