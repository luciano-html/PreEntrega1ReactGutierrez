import React from "react";
import "./itemStyle.css"
function Item(props){

    return(
        <div className="tarjeta">
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
            <span>{props.price}$</span>
        </div>
        
    )
}
export default Item;