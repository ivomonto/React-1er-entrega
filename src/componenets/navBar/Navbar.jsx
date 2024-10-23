import CardWidget from "./CardWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div>
        <h2> <Link to="/">Malibu</Link></h2>
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
      <CardWidget />
    </nav>
  );
}

export default Navbar;