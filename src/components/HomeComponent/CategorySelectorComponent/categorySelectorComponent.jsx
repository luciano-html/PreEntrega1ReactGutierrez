import React from "react";
import ButtonComponent from "../../NavBar/ButtonComponent/ButtonComponent";
import CategoryCard from "./CategoryCard";
import ventana from "../../../assets/img/ventanaVIdrioEntero.webp"
import puerta from "../../../assets/img/puertaMedioVE.webp"
import mosquitero from "../../../assets/img/mosquitero.webp"
import "./categorySelectorStyles.css"
function CategorySelector() {
    return (
        <div className="categorySelectorContainer">
            <div className="topSelectorContainer">
                <div className="text">
                    <h2>
                        PRODUCTOS
                    </h2>
                    <h3>
                        NUESTRAS ABERTURAS
                    </h3>
                </div>

                <ButtonComponent styles={
                    {
                        outline: "2px solid #ff5100",
                        borderRadius: "0px"
                    }
                } label="VER PRODUCTOS" />


            </div>

            <div className="selectorContainer">
                <CategoryCard img={ventana} title="Ventanas de aluminio" buttonLabel="VER +" to="/category/ventanas" />
                <CategoryCard img={puerta} title="Puertas de aluminio" buttonLabel="VER +" to="/category/puertas" />
                <CategoryCard img={mosquitero} title="Mosquiteros y rejas" buttonLabel="VER +" to="/category/mosquiteras" />
            </div>
        </div>
    )
}


export default CategorySelector;