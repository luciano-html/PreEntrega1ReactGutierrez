import React from "react"
import { createContext } from "react"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const cartContext = createContext({ cart: [] })
function CartProvider(props) {
    const [cart, setCart] = useState([]);

    function removeItem(cart, itemIdToRemove) {
        setCart(cart.filter(item => item.id !== itemIdToRemove));
    }

    function addToCart(product, count) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCart = cart.map(item =>
                item.id === existingItem.id ? { ...item, count: item.count + count } : item
            );
            setCart(updatedCart);
        } else {
            const newItemObj = { count, ...product };
            setCart(prevCart => [...prevCart, newItemObj]);
        }

        toast.success(`Agregaste  ${count} ${product.title} al carrito `, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    
    function totalCalculated() {
        let total = 0;
        for (const item of cart) {
            const discountedPrice = item.price - (item.price * item.discount / 100);
            total += discountedPrice * item.count;
        }
        return total;
    }
    const totalBuy = totalCalculated();

    function clearCart() {
        setCart([]);
        toast.info("Carrito vaciado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <cartContext.Provider value={{ cart,  addToCart, removeItem, totalCalculated,totalBuy,clearCart }}>
            {props.children}
            <ToastContainer />
        </cartContext.Provider>

    )
}
export { CartProvider, cartContext};

