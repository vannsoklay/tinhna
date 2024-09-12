// import { json } from "react-router-dom";
import products from "../api/products.json";

import { json } from "@remix-run/router"; // or 'react-router-dom' depending on your setup

export async function LoaderSlugProduct({ params }: { params: Params }) {
  // Assuming `products` is properly imported or available in scope
  const product = products.products.find((p) => p.id === params.id);

  // If the product is not found, return a 404 status
  if (!product) {
    throw json({ message: "Product Not Found" }, { status: 404 });
  }

  // Return the found product as a JSON response
  return json(product);
}
