import { Button } from "@/components/ui/button";

import ProductList from "@/components/shared/products/product-list";
import sampleData from "@/lib/sample-data";

export default function Home() {
  return (
    <div>
      <Button>Button</Button>
      <div className="space-y-8">
        <h2 className="h2-bold">Latest Products</h2>
        <ProductList data={sampleData.products} />
      </div>
    </div>
  );
}
