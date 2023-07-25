import { useEffect, useState } from "react";
import React from "react";
import "./itemDetailContainerStyles.css"
import {getProductData} from "../../services/servicesMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



function ItemDetailContainer(){
    const [product, setProduct] = useState({})
    const {id}=(useParams())
    
    async function requestData() {
        const respuesta = await getProductData(id)
        setProduct(respuesta)
        
    }
    useEffect(
        () => {
            requestData();
        },
        [id]
    )
    return <ItemDetail {...product} />

}
export default ItemDetailContainer;