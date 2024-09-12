import React, { useContext, createContext, useState } from "react";
import { Cart, ShopType } from "types/shop";

type Props = {
  children: React.ReactNode | React.ReactElement;
};

export const ShopContext = createContext<ShopType | null>(null);

const ShopProvider: React.FC<Props> = ({ children }) => {
  const [isCart, setIsCart] = useState<Cart[]>([]);

  const addItem = (cart: Cart) => {
    const find = isCart.filter((p) => p.id == cart.id);
    if (find.length > 0) {
      const updated = isCart.findIndex((p) => p.id == cart.id);
      isCart[updated].count = isCart[updated].count + 1;
      setIsCart(() => [...isCart]);
      return;
    }
    const newCart: Cart = {
      id: cart.id,
      name: cart.name,
      images: cart.images,
      price: cart.price,
      count: 1,
    };
    setIsCart((prev) => [...prev, newCart]);
  };

  const removeItem = (id: number) => {
    const find = isCart.findIndex((p) => p.id == id);
    if (isCart[find].count > 1) {
      isCart[find].count = isCart[find].count - 1;
      setIsCart(() => [...isCart]);
      return;
    }
    setIsCart(isCart.filter((cart) => cart.id != id));
  };

  return (
    <ShopContext.Provider value={{ carts: isCart, addItem, removeItem }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

export const UseShop = () => {
  return useContext(ShopContext) as ShopType;
};
