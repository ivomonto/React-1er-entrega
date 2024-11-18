// src/components/CardWidget.js
import React from 'react';

const CardWidget = ({ count }) => {
  return (
    <div>
      <img src="" width={55} alt="Carrito" />
      <p>{count}</p> {/* Mostramos el número de productos en el carrito */}
    </div>
  );
};

export default CardWidget;
