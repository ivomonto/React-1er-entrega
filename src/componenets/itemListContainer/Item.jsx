// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={"detail/"+item.id} className="item">
      <h2>{item.name}</h2>
      <p className="text-item" >Precio: ${item.price}</p>
      <p className="text-item" >Stock: {item.stock}</p>
      {item.image && <img src={item.image} alt={item.name} className="img-item" width={100}/>}
    </Link>
  );
};


export default Item;
