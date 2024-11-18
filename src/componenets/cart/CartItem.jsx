// src/components/CartItem.js
import React from 'react';

const CartItem = ({ cartItem, removeFromCart }) => {
  return (
    <div>
      <h3>{cartItem.product.name}</h3>
      <p>Precio: ${cartItem.product.price}</p>
      <p>Cantidad: {cartItem.quantity}</p>
      <p>Total: ${cartItem.product.price * cartItem.quantity}</p>
      <button onClick={() => removeFromCart(cartItem.product.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
