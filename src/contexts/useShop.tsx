import React, { useContext, createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode | React.ReactElement;
};

type ShopType = {
  carts: Cart[];
  addCart: Function;
  removeCart: Function;
};

export const ShopContext = createContext<ShopType | null>(null);

const ShopProvider: React.FC<Props> = ({ children }) => {
  const [isCart, setIsCart] = useState<Cart[]>([]);
  
  const addCart = (product: Product) => {
    const find = isCart.filter((p) => p.id == product.id);
    if (find.length > 0) {
      const updated = isCart.findIndex((p) => p.id == product.id);
      isCart[updated].count = isCart[updated].count + 1; 
      setIsCart(() => [...isCart]);
      return;
    }
    const newCart: Cart = {
      id: product.id,
      name: product.name,
      images: product.images,
      price: product.price,
      count: 1,
    };
    setIsCart((prev) => [...prev, newCart]);
  };

  const removeCart = (id: number) => {
    const find = isCart.findIndex((p) => p.id == id);
    if (isCart[find].count > 1) {
      isCart[find].count = isCart[find].count - 1;
      setIsCart(() => [...isCart]);
      return;
    }
    setIsCart(isCart.filter((cart) => cart.id != id));
  };

  return (
    <ShopContext.Provider value={{ carts: isCart, addCart, removeCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

export const useShop = () => {
  return useContext(ShopContext) as ShopType;
};
