import carritoImg from "../../../assets/img/carritoImg.png"
import { cartContext } from "../../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";



function CardWidget() {
    let context = useContext(cartContext)
    
    return (
        <Link className="carro" href="">
            <span className="cantCarro">
                <p className="">{context.getTotalItems()}</p>
                
            </span>
            <img className='carroImg' src={carritoImg} alt=""></img>
        </Link>


    )
}
export default CardWidget;