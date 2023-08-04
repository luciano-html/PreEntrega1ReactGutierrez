import React, { useContext } from "react";
import { cartContext } from "../../App";
import Item from "../Item/Item";

function CartContainer() {
    const { cart ,getTotalItems } = useContext(cartContext)
    console.log(cart)
    
    return (
        <div className="cartComponent">
            <h1>Cart</h1>
            { 
                cart.map(item => (
                    <div className="cartItem">
                        <h2>{item.title}</h2>
                        <p>Precio unidad: ${item.price} </p>
                        <p>Cantidad: {item.count} </p>
                        <p>Total: {item.count*item.price}</p>
                        <button>Eliminar</button>
                    </div>
                ))
            }
            <h2>{getTotalItems}</h2>
        </div>


    )
}
export default CartContainer;