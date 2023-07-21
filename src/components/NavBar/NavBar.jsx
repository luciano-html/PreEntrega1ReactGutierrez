import Carrito from "./CardWidget/CardWidget";

import "./css/navStyles.css"
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header>
      <nav className="navBar">
        <Link to="/"><img className='logoHeader' src='https://herfasa.com/wp-content/uploads/2020/12/logo.png'></img></Link>
        <ButtonComponent to="/category/puertas/:id" label="PUERTAS"/>
        <ButtonComponent to="/category/ventanas/:id" label="VENTANAS"/>
        <ButtonComponent to="/product" label="ITEM"/>
        <ButtonComponent label="CONTACTO"/>
        <Carrito/>
      </nav>
    </header>
  )
}
export default NavBar;