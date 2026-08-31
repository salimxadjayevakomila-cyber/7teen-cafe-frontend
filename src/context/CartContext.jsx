 import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => (item._id || item.id) === (product._id || product.id)
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          (item._id || item.id) === (product._id || product.id)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

 
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          const itemId = item._id || item.id;
          if (itemId === id) {
            const newQty = (item.quantity || 1) + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };
 

  //delete
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => (item._id || item.id) !== id)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);