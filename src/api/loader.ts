import { json } from "react-router-dom";
import products from "../api/products.json";

export async function LoaderSlugProduct({ params }: any) {
  let product = products.products.find((p) => p.id == params.id);
  if (!product) {
    throw json({ message: "Not Found" }, { status: 400 });
  }
  return json(product);
}
