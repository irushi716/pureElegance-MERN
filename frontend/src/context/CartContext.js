import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  const addItem = (item) => {
    setCart((prev) => ({
      items: [...prev.items, item],
    }));
  };

  const removeItem = (id) => {
    setCart((prev) => ({
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
