import React from "react";
import Item from "../Item/Item";
import { Ring } from '@uiball/loaders'

import 'react-loading-skeleton/dist/skeleton.css'

function ItemList({ products }) {

    // if(products.length===0){
    //     return <Ring size={35} color="#fa5100" />
    // }
    
    return (
        
            <div className="itemContainer">
            {products.length===0?
            <Ring size={35} color="#fa5100" />
            :
            <div className="productos">
                {products.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>}
        </div>
        
    )
}
export default ItemList;