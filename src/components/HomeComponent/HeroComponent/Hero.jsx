import React from "react";
import Widget from "../Widget/Widget";
import "./heroStyles.css"
import marketIcon from "../../../assets/img/marketIcon.png"
function Hero() {
    return (
        <>
            <div className="heroBackground">
                <div className="blackout">
                    <div className="sloganContainer">
                        <p className="slogan">
                            ASÍ HACEMOS TU PUERTA
                        </p>

                        <span>
                            IGUAL A LAS OTRAS
                            10.000 QUE HICIMOS
                        </span>
                    </div>
                </div>
            </div>
            <div className="widgetRow">
                <Widget span1="CLIENTE FINAL" span2="¿Donde comprar?" icon={marketIcon} />
                <Widget span1="CLIENTE FINAL" span2="¿Donde comprar?" icon={marketIcon} />
            </div>

        </>

    )
}

export default Hero