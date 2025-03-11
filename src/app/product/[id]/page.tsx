import { Metadata } from "next";
import { Product } from "../../type/product.type";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id, 10);
  const res = await fetch(`http://localhost:4000/products/${id}`, {
    cache: "no-store",
  });
  const data: Product = await res.json();
  console.log("data:", data);
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}
const ProductDetail = async ({ params }: Props) => {
  const id = parseInt(params.id, 10);
  const res = await fetch(`http://localhost:4000/products/${id}`, {
    cache: "no-store",
  });
  const data: Product = await res.json();
  return <div>{data.seo.title}</div>;
};

export default ProductDetail;
