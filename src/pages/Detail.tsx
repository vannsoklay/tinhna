import { Breadcrumb } from "../components/Breadcrumb";
import { useLoaderData } from "react-router-dom";

export default function ProductDetail() {
  const { name, cover }: any = useLoaderData();

  return (
    <div>
      <header className="mb-6">
        <Breadcrumb />
      </header>
      <main>
        <div className="flex space-x-8">
          <div className="space-y-4">
            <div className="h-[680px] w-[680px] bg-red-800">
            </div>
            <ul className="inline-flex space-x-4">
              <li className="h-14 w-14 bg-green-800"></li>  
              <li className="h-14 w-14 bg-green-800"></li>  
              <li className="h-14 w-14 bg-green-800"></li>              
            </ul>
          </div>
          <div>
            <div className="text-2xl font-semibold">{name}</div>
            <button
              className="px-4 py-1 bg-blue-700 text-cyan-50"
              onClick={() => {
                console.log("add one");
              }}
            >
              Add to bag
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
