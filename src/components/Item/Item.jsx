import React from "react";
import "./itemStyle.css"
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
function Item(props) {
    // const {title,img,price}= props;
    return (
        <div className="tarjeta">
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
            <span>{props.price}$</span>
            {
                props.discount?
                <small>Descuento de ${props.discount}%</small>
                :""
            }
            {
                props.freeShipping?
                <p>Envio Gratis</p> 
                :""
            }

            <ButtonComponent to={`/product/${props.id}`} label="Ver Producto" />

        </div>

    )
}
export default Item;