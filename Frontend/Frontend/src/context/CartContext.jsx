import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);  

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === pizza.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)  
    );
  };

  const removeCompletely = (pizzaId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
  };
  
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
