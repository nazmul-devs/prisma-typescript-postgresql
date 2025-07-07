import fs from "fs";
import path from "path";
import { prisma } from "../../src/libs/prisma";

export async function seedProducts() {
  const filePath = path.join(__dirname, "../data/products.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(rawData);

  console.log(`Inserting ${products.length} products...`);

  const chunkSize = 1000;
  for (let i = 0; i < products.length; i += chunkSize) {
    const chunk = products.slice(i, i + chunkSize);
    await prisma.product.createMany({
      data: chunk,
      skipDuplicates: true,
    });
  }

  console.log("✅ products seeded successfully");
}
