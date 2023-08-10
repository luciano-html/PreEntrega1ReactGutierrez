import React from "react"
import { createContext } from "react"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
// Crear el context
// Importar/Exportar
// Consumirlo
// Crear provider
// Crear prop Value

const cartContext = createContext({ cart: [] })
function CartProvider(props) {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState([])

    function addToCart(product, count) {
        const newCart = [...cart] //copiamos el estado cart para modificarlo

        const newItemObj = { count, ...product } // creamos un objeto nuevo con count y product dentro del mismo

        newCart.push(newItemObj) //cuando llamamos a la funcion se pushea los datos de itemDetailContainer a newItemObj

        let pricePush = product.price
        
        totalPrice.push(pricePush * count)

        setCart(newCart)

        toast.success(`Agregaste  ${newItemObj.count} ${newItemObj.title} al carrito `, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        return newCart
    }
    
    function removeItem(cart){
        console.log(cart)
        setCart(prevState => prevState.filter(item=>item.id!==cart.id))
    }
    
    return (
        <cartContext.Provider value={{ cart, addToCart,totalPrice,removeItem }}>
            {props.children}
            <ToastContainer />
        </cartContext.Provider>

    )
}
export { CartProvider, cartContext };

