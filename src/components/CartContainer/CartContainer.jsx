import React, { useContext } from "react";
import { cartContext } from "../context/Context";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
import "./cartContainerStyles.css"




function CartContainer() {
    const { cart, removeItem,totalBuy,clearCart } = useContext(cartContext);

    let deleteItem = (itemIdToDelete) => {
        removeItem(cart, itemIdToDelete);
    };
    

    return (
        <div className="cartComponent">
            {cart.length > 0 ? 
                <div>
                    <h1>Cart</h1>
                    {cart.map(item => (
                        <div className="cartItem" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>Precio unidad: ${item.price - (item.price * item.discount / 100)} </p>
                            <p>Cantidad: {item.count} </p>
                            
                            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div className="botonesCart">
                    <p className="totalCart">Total: ${totalBuy}</p>
                    <ButtonComponent onClick={clearCart} label="Vaciar Carrito" />
                    <ButtonComponent to="/"label="Seguir comprando" />
                    <ButtonComponent to="/checkout" label="Confirmar compra" />
                    </div>
                    
                </div>
            : 
                <div className="noProducts">
                    <p>No hay productos en el carrito</p>
                    <ButtonComponent to="/" label="Empezar a comprar" />
                </div>
                

            }
        </div>
    );
}
export default CartContainer;