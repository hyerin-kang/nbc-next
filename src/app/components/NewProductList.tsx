import Image from "next/image";
import { Product } from "../type/product.type";
import Link from "next/link";

const NewProductList = async () => {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });
  const data: Product[] = await res.json();
  const newData = data.filter((p) => p.isNew);

  return (
    <div className="flex gap-2 oveflow-auto w-full">
      <div className="w-max flex gap-2">
        {newData.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex"
            >
              <div className="flex gap-2 w-[250px] border rounded-sm">
                <Image
                  className="rounded-sm object-scale-down"
                  width={80}
                  height={80}
                  src={product.images}
                  alt={product.title}
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-md font-medium">{product.title}</h2>
                    <p className="mt-4 font-thin">{product.price.amount}$</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewProductList;
