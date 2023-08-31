import React from "react";
import Hero from "./HeroComponent/Hero";
import "./homeStyles.css"
import CategorySelector from "./CategorySelectorComponent/categorySelectorComponent";




function Home() {
    return (
        <div className="homeContainer">
            <Hero/>
            <CategorySelector/>
        </div>
    )
}


export default Home;