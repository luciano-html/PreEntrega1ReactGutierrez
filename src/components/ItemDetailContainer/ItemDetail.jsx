import React from "react";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
function ItemDetail(props) {
    return (
        <div className="detailContainer" >

            <div className="imgContainer">
                <img src={props.img} alt="" />
            </div>

            <div className="descriptionContainer">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <span>{props.price}$</span>
                <ButtonComponent label="Comprar" />
            </div>

        </div>
    )
}
export default ItemDetail;