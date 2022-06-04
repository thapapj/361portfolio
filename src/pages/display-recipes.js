import React from "react";
import {useState, useEffect} from "react";
import RecipeList from "../components/RecipeList";
import "../styles/recipeList.css"

function DisplayRecipe(){
    const [recipeDatas, setRecipeData] = useState([])


    useEffect(()=>{
        fetch("/recipe")
        .then(response => response.json())
        .then(data =>{
            // console.log(data)
            setRecipeData(data)
        })
    }, []);

    return(
        <div className="display recipes">
            <div className="search bar"></div>
            <RecipeList recipeDatas = {recipeDatas}></RecipeList>
        </div>
    )
}

export default DisplayRecipe;