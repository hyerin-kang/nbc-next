// import ProductList from "./components/ProductList";

import { Suspense } from "react";
import NewProductList from "./components/NewProductList";
import ProductList from "./components/ProductList";
import Loading from "./loading";

export default async function Home() {
  return (
    <div className="p-8">
      <h2>Sparta Shop</h2>
      <Suspense fallback={<Loading />}>
        <NewProductList />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
