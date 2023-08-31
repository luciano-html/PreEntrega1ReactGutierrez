import { useContext, useState } from "react";

import { cartContext } from "../context/Context";
import { createDocOrder } from "../../services/firebase";
import { toast } from 'react-toastify';
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
import "./checkoutStyles.css"


function Checkout() {
    const { cart, totalBuy,clearCart } = useContext(cartContext)
    const [buyer, setBuyer] = useState({
        completeName: "",
        email: "",
        age: "",
    });

    

    async function handleCheckOut(e) {
        e.preventDefault()
        const newOrderData = {
            items: cart,
            buyer: {
                name: buyer.completeName, email: buyer.email, age: buyer.age
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
            clearCart()
            
        } catch (error) {
            console.log("No se pudo realizar la compra", error)
        }
    }
    function onInputChange(evt) {
        const value = evt.target.value;
        const field = evt.target.name;
        const newState = { ...buyer };
        newState[field] = value;
        setBuyer(newState);
    }
    return (
        
        <form className="formContainer">
            {cart.length>0?<>
            <h2>Complete sus datos</h2>
            <div className="inputsContainer">
                <label htmlFor="email">Nombre</label>
                <input value={buyer.firstname}  name="completeName" type="text" onChange={onInputChange} />

                <label htmlFor="email">Email</label>
                <input value={buyer.email} name="email" type="email" onChange={onInputChange}/>
            
                <label>Edad</label>
                <input value={buyer.age} name="age"type="number"onChange={onInputChange}/>
            </div>
            {buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== ""?<ButtonComponent onClick={handleCheckOut}label="Confirmar"/>:""}
            <ButtonComponent to="/cart" label="Volver al carrito" /></>
            :<ButtonComponent to="/" label="Empezar a comprar" />}
        </form>
    )
}
export default Checkout;