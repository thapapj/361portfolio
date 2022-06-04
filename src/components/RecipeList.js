import React from "react";
import Recipe from "./Recipe";
import {Link} from "react-router-dom"
import "../styles/recipeList.css"

function RecipeList(recipeDatas) {
    let recipeArray = recipeDatas.recipeDatas
    return(
        <div className="recipe page">
        <div className="recipe grid">
            {recipeArray.map((recipes, i)=> 

                <Recipe recipeData={recipes}
                key={i} />
            )}
        
        </div>
        <div  id="recipe navigation">
            <div className="linkContainer">
                <Link id="link1" to="/">HOME</Link>
                <Link id="link2" to="/display_recipe">RECIPE</Link>
            </div>
        </div>
        </div>
    )
}

export default RecipeList;