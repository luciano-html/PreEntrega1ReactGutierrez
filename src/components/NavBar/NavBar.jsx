import Carrito from "./CardWidget/CardWidget";
import "./css/navStyles.css"
import ButtonComponent from "./ButtonComponent/ButtonComponent";
function NavBar() {
  return (
    <header>
      <nav className="navBar">
        <img className='logoHeader' src='https://herfasa.com/wp-content/uploads/2020/12/logo.png' ></img>
        <ButtonComponent label="PUERTAS"/>
        <ButtonComponent label="VENTANAS"/>
        <ButtonComponent label="NOSOTROS"/>
        <ButtonComponent label="CONTACTO"/>
        <Carrito/>
      </nav>
    </header>
  )
}
export default NavBar;