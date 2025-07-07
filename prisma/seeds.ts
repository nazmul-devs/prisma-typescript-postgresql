import { PrismaClient } from "@prisma/client";
import { seedProducts } from "./seeds/products.seed";

const prisma = new PrismaClient();

async function main() {
  await seedProducts();
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
