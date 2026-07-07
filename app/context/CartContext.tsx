"use client";

import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";

/* ---------------- TYPES ---------------- */

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  totalItems: number;
  totalPrice: number;
};

/* ---------------- CONTEXT ---------------- */

export const CartContext = createContext<CartContextType | null>(null);

/* ---------------- HOOK ---------------- */

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};

/* ---------------- PROVIDER ---------------- */

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  /* Load from localStorage */
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  /* Save helper */
  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  /* ---------------- ACTIONS ---------------- */

  // ADD TO CART
  const addToCart = (product: Product) => {
    const exists = cart.find((item) => item.id === product.id);

    let updatedCart: CartItem[];

    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }

    updateCart(updatedCart);
  };

  // REMOVE ITEM
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  // INCREASE QTY
  const increaseQty = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    updateCart(updatedCart);
  };

  // DECREASE QTY
  const decreaseQty = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, qty: Math.max(item.qty - 1, 1) }
        : item
    );

    updateCart(updatedCart);
  };

  /* ---------------- DERIVED VALUES ---------------- */

  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  /* ---------------- PROVIDER VALUE ---------------- */

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};