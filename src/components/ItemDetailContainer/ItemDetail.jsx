import React, { useContext } from "react";
import ItemCountContainer from "../ItemCount/ItemCountCotainer";
import { cartContext } from "../../App";
import { ToastContainer, toast } from 'react-toastify';

function ItemDetail(props) {
    const { addToCart } = useContext(cartContext)

    function handleAddToCart(count) {
        addToCart(props, count)
        
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
                <ItemCountContainer onConfirm={handleAddToCart} stock={props.stock} />
                
            </div>

        </div>
    )
}
export default ItemDetail;