import React from "react";
import { Link } from "react-router-dom";
import Ingredient from "./ingredient";
import randomBackground from "./randomBackground";
import deleteRecipe from "./deleteRecipe";
import {MdDeleteForever} from "react-icons/md"

function Recipe({recipeData}){
    let ingredients = recipeData.ingredient
    return(
        <div>
        <Link className="recipe grid item" to={`/display_recipe/${recipeData._id}`}>
            <h3>{recipeData.name}</h3>
            <table id={recipeData.name} className="cocktail card" style={{backgroundColor: `${randomBackground()}`}}>
                
                <tbody>
                    {ingredients.map((ingredient, i) => <Ingredient ingredientData={ingredient} _id={recipeData._id} key={i} />)}
                    
                </tbody>  
            </table>
        </Link>
        
        </div>
    )
}

export default Recipe