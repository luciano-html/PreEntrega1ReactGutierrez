import React from "react";
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
import "./homeStyles.css"
import hero from "../../assets/img/hero.webp"


function Home() {
    return (
        <div className="homeComponent">
            <div className="hero">
                <h1>Hola</h1>
                <img src={hero} alt="" />
                <ButtonComponent to="itemlist" label="Productos" />
            </div>

        </div>
    )
}


export default Home;