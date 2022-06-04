import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css"

function HomePage(){
    return(
        <div className="home display">
            <Link to="/display_recipe" className="link">View Recipes</Link>
            <Link to="/add_recipe" className="link">Add Recipe</Link>
            
        </div>
    )
}

export default HomePage;