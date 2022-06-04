import React, {useState} from "react";
import { Link } from "react-router-dom";
import AddIngredients from "./add-ingredients";
import "../styles/form.css"
function AddRecipe(){
    const [recipeName, setRecipeName] = useState("");
    const [ingredientNumber, setIngredientNumber] = useState(0);
    const [recipeId, setRecipeId] = useState("");
    const node = [];
    if(recipeId !== ""){
        for (let i=0; i<ingredientNumber; i++){
            node.push(<AddIngredients key={i} recipeId={recipeId} />)
        }
    }


    
    // submission of recipe Name
    const handleSubmit = (event) => {
        event.preventDefault();
        let recipeForm = document.getElementById("recipeForm")
        recipeForm.style.display = "none"
        fetch("/recipe", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: recipeName})
        })
        .then(response => response.json())
        .then(data => {
            setRecipeId(data._id)
        })   

    }




    return(
        <div id="Form">
            <form id="recipeForm" >
                    <h1>ENTER YOUR RECIPE NAME</h1>
                    <input id="recipeName" type="text" value={recipeName} onChange={(e)=> setRecipeName(e.target.value)} />
                    <h1>HOW MANY INGREDIENTS DOES THE RECIPE HAVE?</h1>
                    <input id="recipeNumber" type="number" onChange={(e) => setIngredientNumber(e.target.value)} />
                <h1 id="nextStep" className="link" onClick={(recipeName&&ingredientNumber?handleSubmit:{})}>NEXT STEP</h1>
            </form>

            {node}
        <div  id="navigation">
            <div className="linkContainer">
                <Link id="link1" to="/">HOME</Link>
                <Link id="link2" to="/display_recipe">RECIPE</Link>
            </div>
        </div>
        </div>
    )
}

export default AddRecipe