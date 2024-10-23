// src/components/ItemList.jsx
import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="itemlist" >
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
