import CardWidget from "./CardWidget"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navBar">
        <div>
            <h2>Malibu</h2>
            <ul className="navList">
                <li className="navItem">Sabanas</li>
                <li className="navItem">Toallas</li>
                <li className="navItem">Vasos</li>  
            </ul>
           
        </div>
         <CardWidget/>
    </nav>
  )
}

export default Navbar