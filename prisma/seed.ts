import prisma from "./client";
import sampleData from "@/lib/sample-data";

async function main() {
  await prisma.product.createMany({
    data: sampleData.products.map((product) => ({
      ...product,
      isFeatured: product.isFeatured ?? false,
      banner: product.banner ?? "",
    })),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
