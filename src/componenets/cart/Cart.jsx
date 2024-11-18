// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem.jsx';

const Cart = () => {
  const { cart, removeFromCart, confirmPurchase } = useCart();

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.product.id} cartItem={cartItem} removeFromCart={removeFromCart} />
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={confirmPurchase}>Confirmar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
