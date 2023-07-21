import React from "react";
import "./itemStyle.css"
import { Link } from "react-router-dom";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
function Item(props) {
    // const {title,img,price}= props;
    return (
        <div className="tarjeta">
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
            <span>{props.price}$</span>

            <ButtonComponent to={`/product/${props.id}`} label="Ver Producto" />

        </div>

    )
}
export default Item;