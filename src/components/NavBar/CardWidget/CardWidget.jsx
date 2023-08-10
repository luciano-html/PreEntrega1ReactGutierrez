import carritoImg from "../../../assets/img/carritoImg.png"
import { cartContext } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";



function CardWidget() {
    let context = useContext(cartContext)
    

    return (
        <Link to={"/cart"} className="carro" href="">
            <span className="cantCarro">
                <p className="">{context.cart.length}</p>
                
            </span>
            <img className='carroImg' src={carritoImg} alt=""></img>
        </Link>


    )
}
export default CardWidget;