import { useEffect, useState } from "react";
import React from "react";
import "./itemDetailContainerStyles.css"
import { getProductData } from "../../services/firebase";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Ring } from '@uiball/loaders'


function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { id } = (useParams())
    const [isLoading, setIsLoading] = useState(true)
    
    
    async function requestData() {
        const respuesta = await getProductData(id)
        setProduct(respuesta)
        setIsLoading(false)
    }
    useEffect(
        () => {
            setIsLoading(true)
            requestData();
        },
        [id]
    )

    if(isLoading){
        return <Ring size={35} color="#fa5100" />
    }


    return <ItemDetail {...product} />

}

export default ItemDetailContainer;
