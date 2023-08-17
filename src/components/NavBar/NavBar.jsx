import CardWidget from "./CardWidget/CardWidget";
import instagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube.png"
import facebook from "../../assets/img/facebook.png"
import twitter from "../../assets/img/twitter.png"
import whatsapp from "../../assets/img/whatsapp.png"
import "./css/navStyles.css"
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <header>

      <nav className="navBar">
        
          <Link className="logoHeaderContainer" to="/">
            <img className='logoHeader' alt="asd" src='https://herfasa.com/wp-content/uploads/2020/12/logo.png'>
            </img>
          </Link>
        

        <div className="buttonNav">
          <ButtonComponent label="La empresa"/>
          <ButtonComponent label="Productos"/>
          <ButtonComponent to="/category/puertas" label="Puertas"/>
          <ButtonComponent to="/category/ventanas" label="Ventanas"/>
        </div> 

        <div className="socialMediaNav">
          <Link><img src={instagram} alt=""/></Link>
          <Link><img src={youtube} alt=""/></Link>
          <Link><img src={facebook} alt=""/></Link>
          <Link><img src={twitter} alt=""/></Link>
          <Link><img src={whatsapp} alt=""/></Link>
        </div>

          <CardWidget />
      </nav>
    </header>
  )
}
export default NavBar;