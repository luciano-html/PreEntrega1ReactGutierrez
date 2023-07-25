import React, { useState, useEffect } from "react";
import getData, { getProductByCategory } from "../../services/servicesMock";
import "./itemListContainerStyles.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    

        async function requestData() {
            const respuesta = categoryId?  await getProductByCategory(categoryId) : await getData()
            setProducts(respuesta)
            
        }

    useEffect(
        () => {
            requestData();
        },
        [categoryId]
    )
    return (
        <ItemList products={products} />

        // <div className="itemContainer">
        //     <h1 className="greeting" >{props.greeting}</h1>
        //     {products.map((item) => (
        //         <Item key={item.id} {...item} />
        //     ))}
        // </div>
    )
}
export default ItemListContainer;