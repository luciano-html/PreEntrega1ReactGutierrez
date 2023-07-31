import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";

function ItemCountContainer({stock,onConfirm}) {
    const [clicks, setClicks] = useState(1);

    function handleClicksSuma() {
        // setClicks(clicks+1)
        if (clicks < stock) {
            setClicks((prevState) => prevState + 1);
        }
    }
    function handleClicksResta() {
        if (clicks > 1) {
            setClicks((prevState) => prevState - 1);
        }
    }
    return(
        <div className="contadorContainer">
            <ItemCount onClickSuma={handleClicksSuma} onClickResta={handleClicksResta} clickCount={clicks} />
            <ButtonComponent onClick={()=>onConfirm(clicks)}  label="Añadir al carrito" />
        </div>
    )
}

export default ItemCountContainer;