import React from "react";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
function ItemDetail(props){
    return(
        <div className="detailContainer" >
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
            <p>{props.description}</p>
            <span>{props.price}$</span>
            <ButtonComponent label="Comprar"/>
        </div>
    )
}
export default ItemDetail;