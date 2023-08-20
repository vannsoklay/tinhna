import { useShop } from "../contexts/useShop";

export default function Checkout() {
  const { cart, addCart, removeCart } = useShop();

  return (
    <div className="flex justify-center">
      <main>
        {cart.length == 0 ? (
          <div>Not Product</div>
        ) : (
          cart.map((product) => (
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
                <button onClick={() => removeCart(product.id)}>Remove</button>
                <button onClick={() => addCart(product)}>Add</button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
