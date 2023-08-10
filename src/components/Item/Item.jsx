import React from "react";
import "./itemStyle.css"
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
function Item(props) {

    const styleDiscount = {
        backgroundColor: props.discount ? "green" : "inherit",
        color: props.discount ? "white" : "inherit"
    }

    const styleFreeShipping = {
        backgroundColor: props.freeShipping ? "green" : "inherit",
        color: props.freeShipping ? "white" : "inherit"
    }

    return (

        <div className="tarjeta">
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
            {
                props.discount ? <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px"

                }}>
                    <small>Descuento de ${props.discount}%</small>
                    <span className="precio" style={styleDiscount}>{props.price - (props.price * props.discount / 100)}$</span>
                    <span className="precio" style={{ styleDiscount, textDecoration: "line-through" }}>{props.price}$</span>
                </div>
                    : <span className="precio" style={styleDiscount}>{props.price}$</span>

            }
            {
                props.stock ?
                    props.freeShipping ?
                        <p className="freeShipping" style={styleFreeShipping}>Envio Gratis</p>
                        : ""
                    : "Sin stock"

            }

            <ButtonComponent to={`/product/${props.id}`} label="Ver Producto" />

        </div>

    )
}
export default Item;