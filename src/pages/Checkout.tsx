import { Product } from "types/product";
import { UseShop } from "../contexts/useShop";

export default function Checkout() {
  const { carts, addItem, removeItem } = UseShop();

  return (
    <div className="flex justify-center">
      <main>
        {carts.length == 0 ? (
          <div>Not Product</div>
        ) : (
          carts.map((product) => (
            <div className="px-4 py-4">
              <div>
                {product.name}
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  {product.price} $
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  {product.count}
                </span>
              </div>
              <div>
                <button onClick={() => removeItem(product.id)}>Remove</button>
                <button onClick={() => addItem(product as any)}>Add</button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
