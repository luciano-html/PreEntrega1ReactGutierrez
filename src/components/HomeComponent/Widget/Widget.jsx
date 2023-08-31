import React from "react"
import { Link } from "react-scroll";

import "./widgetStyles.css"

function Widget(props) {
    return (
        <button to="/" className="widgetContainer">
            <div className="texts">
                <span className="span1">{props.span1}</span>
                <span className="span2">{props.span2}</span>
            </div>
            <img className="icon" src={props.icon} alt="" />

        </button>
    )
}


export default Widget;