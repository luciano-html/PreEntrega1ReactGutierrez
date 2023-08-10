import { useContext, useState } from "react";
import { cartContext } from "../context/Context";
import { createDocOrder } from "../../services/firebase";
import { toast } from 'react-toastify';
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
import OrderConfirm from "../OrderConfirm/OrderConfirm";

function Checkout() {
    const { cart, totalBuy } = useContext(cartContext)
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
        <form>
            <h2>Completa tus datos para completar la compra🛍</h2>

            <div>
                <label value={buyer.firstname} htmlFor="email" style={{ width: "100px", marginRight: 4 }}>Nombre</label>
                <input name="completeName" type="text" onChange={onInputChange} />
            </div>

            <div>
                <label value={buyer.email} htmlFor="email" style={{ width: "100px", marginRight: 4 }}>Email</label>
                <input name="email" type="email" onChange={onInputChange}/>
            </div>

            <div>
                <label value={buyer.age} style={{ width: "100px", marginRight: 4 }}>Edad</label>
                <input name="age"type="number"onChange={onInputChange}/>
            </div>

            <ButtonComponent disabled={!(buyer.completeName !== "" && buyer.email !== "" && buyer.age !== "")}onClick={handleCheckOut} to={OrderConfirm} label="Confirmar"/>
            <ButtonComponent to="/cart" label="Volver al carrito" />
        </form>
    )
}
export default Checkout;