import React, { useState, useEffect } from "react";
import getData from "../../services/servicesMock";
import Item from "../Item/Item";
import "./itemListContainerStyles.css"
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
import ItemList from "./ItemList";


function ItemListContainer(props) {
    // 1 OBTENER DE FORMA ASYNC LA LISTA DEL ECOMMERCE
    // 2 GUARDAMOS LA RESPUESTA EN UN ESTADO
    // 3 USAMOS KEY PARA EL MAP
    // 4
    const [products, setProducts] = useState([])
    console.log("Renderizando item list container")
    async function requestData() {
        const respuesta = await getData()
        setProducts(respuesta)
    }
    useEffect(
        () => {
            console.log("Montaje ILT")
            requestData();
        },
        []
    )



    return (
        <div className="itemContainer">
            <h1 className="greeting" >{props.greeting}</h1>
            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}
            
        </div>
    )
}
export default ItemListContainer;