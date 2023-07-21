import React from "react";
import Item from "../Item/Item";

function ItemList({products}){
    // console.log(products)
    return(
        <div className="itemContainer">
            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}
            
        </div>
    )
}
export default ItemList;