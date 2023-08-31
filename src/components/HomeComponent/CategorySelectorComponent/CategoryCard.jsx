import React from "react";
import ButtonComponent from "../../NavBar/ButtonComponent/ButtonComponent";

function CategoryCard(props) {
    return (
        <div className="categoryCardContainer">
            <img src={props.img} alt="" />
            <div className="titleContainer">
                <span>
                    {props.title}
                </span>
                <ButtonComponent label={props.buttonLabel} to={props.to}/>
            </div>

        </div>
    )
}

export default CategoryCard;