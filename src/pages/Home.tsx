import { Breadcrumb } from "../components/Breadcrumb";
import products from "../api/products.json";
import { Link } from "react-router-dom";
import { useShop } from "../contexts/useShop";

export default function Home() {
  const { cart } = useShop();

  return (
    <div className="w-full">
      <Breadcrumb />
      <div className="mt-6 grid grid-cols-4 gap-8">
        {products.products.map(({ id, name, price, cover }, index) => (
          <Link to={`/dt/${id}`} key={index}>
            <article className="relative cursor-pointer">
              <label className="absolute py-1.5 px-6 bg-purple-200 text-purple-700 font-semibold top-4">
                New
              </label>
              <img className="w-full h-96 object-cover" src={cover} />
              <div className="py-2">
                <label className="font-semibold text-sm">{name}</label>
                <div>
                  <ul className="">
                    <label className="font-bold text-black/[.60] text-lg">
                      ${price}
                    </label>
                  </ul>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
