import { json, LoaderFunction } from "react-router-dom";
import products from "../api/products.json";

// import { json } from "@remix-run/router"; // or 'react-router-dom' depending on your setup

export const LoaderSlugProduct: LoaderFunction = async ({ params }) => {
  // Safely access the product ID and parse it as needed
  const productId = params.id;

  // Find the product based on the ID
  const product = products.products.find((p) => p.id.toString() === productId);

  // If no product is found, throw a JSON response with a 404 status
  if (!product) {
    throw json({ message: 'Product Not Found' }, { status: 404 });
  }

  // Return the found product as a JSON response
  return json(product);
};