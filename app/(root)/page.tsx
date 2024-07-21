import ProductList from "@/components/shared/product/product-list";
import prisma from "@/prisma/client";

async function Home() {
  const products = await prisma.product.findMany();
  return (
    <div>
      <div className="space-y-8">
        <h2 className="h2-bold">Latest Products</h2>
        <ProductList data={products} />
      </div>
    </div>
  );
}

export default Home;
