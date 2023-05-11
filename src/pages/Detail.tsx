import { Breadcrumb } from "../components/Breadcrumb";
import { useLoaderData } from "react-router-dom";

export default function ProductDetail() {
  const { name }: any = useLoaderData();

  return (
    <div>
      <Breadcrumb />
      <div>{name}</div>
      <button
        className="px-4 py-1 bg-blue-700 text-cyan-50"
        onClick={() => {
          console.log("add one");
        }}
      >
        Add to bag
      </button>
    </div>
  );
}
