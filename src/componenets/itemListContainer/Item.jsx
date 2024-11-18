import React, { useState } from 'react';
import { useCart } from '../context/cartContext.jsx'; // Importamos el hook del carrito

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada
  const { addToCart } = useCart(); // Obtenemos la función para agregar productos al carrito

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity); // Agregamos el producto al carrito con la cantidad seleccionada
    }
  };

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      {item.image && <img src={item.image} alt={item.name} className="img-item" width={100}/>}

      {/* Input para seleccionar la cantidad */}
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))} // Actualiza la cantidad al cambiar el input
        min="1" // Solo permitir números positivos
        max={item.stock} // Limitar la cantidad al stock disponible
      />
      
      {/* Botón para agregar al carrito */}
      <button onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Item;
