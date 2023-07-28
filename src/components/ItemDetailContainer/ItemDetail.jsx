import React from "react";

import ItemCountContainer from "../ItemCount/ItemCountCotainer";


function ItemDetail(props) {
    
    function handleAddToCart(count) {
        alert(`Agregaste ${count} cantidad/es de ${props.title} al carrito`)
        
    }
    return (
        <div className="detailContainer" >

            <div className="imgContainer">
                <img src={props.img} alt="" />
            </div>

            <div className="descriptionContainer">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <span>{props.price}$</span>
                <ItemCountContainer onConfirm={handleAddToCart} stock={props.stock}/>

            </div>

        </div>
    )
}
export default ItemDetail;