import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/Context";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
import { createDocOrder } from "../../services/firebase";
import { ToastContainer, toast } from 'react-toastify';


function CartContainer() {
    const { cart } = useContext(cartContext)
    const {totalPrice} =useContext(cartContext)
    const {removeItem} = useContext(cartContext)
    


    function calcularTotal(arr) {
        let resultado = 0;
        for (let num of arr) {
            resultado += num
        }

        return resultado
    }
    let totalBuy = calcularTotal(totalPrice)
    
    

    function handleDeleteItem(){
        removeItem(cart)
    }
    


    async function handleCheckOut() {
        const newOrderData = {
            items: cart,
            buyer: {
                name: "Luciano Gutierrez", email: "luciano.c.gutierrez@gmail.com"
            },
            date: new Date(),
            total: totalBuy

        }
        try {
        const buyId = await createDocOrder(newOrderData)
        console.log(buyId)
        toast.success(`Gracias por comprar, el numero de su compra es ${buyId} `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        } catch (error) {
            console.log("No se pudo realizar la compra" ,error)
        }

    }


    return (
        <div className="cartComponent">
            <h1>Cart</h1>
            {
                cart.map(item => (
                    <div className="cartItem">
                        <h2>{item.title}</h2>
                        <p>Precio unidad: ${item.price} </p>
                        <p>Cantidad: {item.count} </p>
                        <ButtonComponent label="Eliminar" />

                    </div>
                ))
                
            }
            <p>Total:{totalBuy}</p>
            <ButtonComponent onClick={handleCheckOut} label="Comprar" />

        </div>


    )
}
export default CartContainer;