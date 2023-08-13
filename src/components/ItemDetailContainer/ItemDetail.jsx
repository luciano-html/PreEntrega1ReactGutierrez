import React, { useContext, useState } from "react";
import ItemCountContainer from "../ItemCount/ItemCountCotainer";
import { cartContext } from "../context/Context";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";


function ItemDetail(props) {
    const { addToCart } = useContext(cartContext)
    const [addedToCart, setIsAddedToCart] = useState(false)
    
    function handleAddToCart(count) {
        addToCart(props, count)
        setIsAddedToCart(true)
    }


    return (

        <div className="detailContainer" >
            <div className="imgContainer">
                <img src={props.img} alt="" />
            </div>

            <div className="descriptionContainer">
                <h2>{props.title}</h2>
                <p>{props.description}</p>

                {props.discount? props.price - (props.price * props.discount / 100):
                <span>{props.price}$</span>}
                
                {
                    addedToCart? <>
                    <ButtonComponent to="/cart" label="Ir al Carrito"/>
                    <ButtonComponent to="/" label="Seguir comprando"/></>
                    
                    :
                    <ItemCountContainer onConfirm={handleAddToCart} stock={props.stock} />
                }


            </div>

        </div>
    )
}
export default ItemDetail;