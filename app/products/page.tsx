import { Suspense } from "react";
import ProductCatalogClient from "./ProductCatalog";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductCatalogClient />
    </Suspense>
  );
}