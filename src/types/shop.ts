
export type Cart = {
    id: number,
    name: string,
    images: string[],
    price: string,
    count: number
}

export type ShopType = {
    carts: Cart[];
    addItem: (c: Cart) => void;
    removeItem: (i: number) => void;
  };
  