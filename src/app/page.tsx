// import ProductList from "./components/ProductList";

//SSG : 기본
export default async function Home() {
  const res = await fetch("http://localhost:4000/products", {
    next: { revalidate: 3 },
  });
  const data: Product[] = await res.json();
  console.log("render");
  return (
    <div className="p-8">
      안녕하세요! Next.js 입니다!
      <div className="p-8 m-4">
        {data.map((product) => (
          <div className="flex border p-4 gap-4 rounded-md" key={product.id}>
            <img
              className="rounded-smr"
              width={150}
              height={150}
              src={product.images}
              alt={product.title}
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="mt-4 text-2xl">{product.price.amount}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export interface Product {
  id: string;
  isNew: boolean;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: { name: string; values: string[] }[];
  price: { amount: string; currencyCode: string };
  variants: {
    id: string;
    title: string;
    price: string;
    availableForSale: boolean;
  }[];
  images: string;
  featuredImage: string;
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
}
