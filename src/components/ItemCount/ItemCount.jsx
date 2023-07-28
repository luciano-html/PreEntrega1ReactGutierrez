import React from "react";
import "./itemCountStyles.css"

function ItemCount(props) {


    return (
        <div className="contador">
            <button onClick={props.onClickResta}>
                <h3>-</h3>
            </button>

            <span>{props.clickCount}</span>

            <button onClick={props.onClickSuma}>
                <h3>+</h3>
            </button>
        </div>
    )
}
export default ItemCount;