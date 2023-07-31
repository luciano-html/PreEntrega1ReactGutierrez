import CardWidget from "./CardWidget/CardWidget";

import "./css/navStyles.css"
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <header>
      <nav className="navBar">
        <Link to="/"><img className='logoHeader'alt="asd" src='https://herfasa.com/wp-content/uploads/2020/12/logo.png'></img></Link>
        <ButtonComponent to="/category/puertas" label="Puertas"/>
        <ButtonComponent to="/category/ventanas" label="Ventanas"/>
        <ButtonComponent label="CONTACTO"/>
        
        <CardWidget/>
      </nav>
    </header>
  )
}
export default NavBar;