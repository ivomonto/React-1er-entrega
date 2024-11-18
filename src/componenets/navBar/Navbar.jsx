import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext.jsx';
import CardWidget from './Cardwidget.jsx';
import './navbar.css';

const Navbar = () => {
  const { cart } = useCart(); 
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <nav className="navBar">
      <div>
        <h2>
          <Link to="/">Malibu</Link>
        </h2>
        <ul className="navList">
          <li className="navItem">
            <Link to="/category/sabanas">Sábanas</Link>
          </li>
          <li className="navItem">
            <Link to="/category/toallas">Toallas</Link>
          </li>
          <li className="navItem">
            <Link to="/category/vasos">Vasos</Link>
          </li>
        </ul>
      </div>
      <Link to="/cart">
        <CardWidget count={cartCount} /> { }
      </Link>
    </nav>
  );
};

export default Navbar;
