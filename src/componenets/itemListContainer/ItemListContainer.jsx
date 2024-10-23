// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../../data/data.js';
import "./itemlistcontainer.css";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams(); 

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getProducts();
        
        const filteredItems = idCategory 
          ? data.filter(product => product.category === idCategory) 
          : data;
        setItems(filteredItems);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [idCategory]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="itemlistcontainer">
      <h1>Lista de Productos</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

