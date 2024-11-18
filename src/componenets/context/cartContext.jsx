// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const CartContext = createContext();

// Hook para usar el contexto en otros componentes
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar productos al carrito
  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingProductIndex >= 0) {
      // Si el producto ya existe, actualizamos la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  // Eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  // Confirmar la compra (vaciar el carrito)
  const confirmPurchase = () => {
    alert('Compra confirmada!');
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, confirmPurchase }}>
      {children}
    </CartContext.Provider>
  );
};
