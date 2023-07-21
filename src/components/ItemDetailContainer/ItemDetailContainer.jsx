import { useEffect, useState } from "react";
import React from "react";
import getData from "../../services/servicesMock";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
import "./itemDetailContainerStyles.css"
import {getProductData} from "../../services/servicesMock";
import ItemDetail from "./ItemDetail";


// HACER CONTADOR
function ItemDetailContainer(){
    const [product, setProduct] = useState({})
    
    async function requestData() {
        const respuesta = await getProductData()
        setProduct(respuesta)
    }
    useEffect(
        () => {
            requestData();
        },
        []
    )
    return <ItemDetail {...product} />
    // title={product.title} img={product.img} price={product.price} description={product.description}
}
export default ItemDetailContainer;