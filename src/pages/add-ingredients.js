import React, {useState} from "react";

function AddIngredients(recipeId){
    const [ingredientName, setIngredientName] = useState("")
    const [ingredientUnit, setIngredientUnit] = useState("oz")
    const [ingredientQunatity, setIngredientQuantity] = useState("")
    const [ingredientColor, setIngredientColor] = useState("#000000")



    const handleSubmit =(event) =>{
        event.preventDefault();
        let field = document.getElementById("form")
        let form = document.getElementById("ingredientForm")
        form.style.display = "none"
        let text = document.createTextNode(`The ingreient ${ingredientName} has been added!`)
        field.appendChild(text)
        fetch("/ingredients", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({_id: recipeId.recipeId, name: ingredientName, quantity:ingredientQunatity, unit:ingredientUnit, color:ingredientColor})
        })
    }
    return(
        <div id="form">
            <form id="ingredientForm" onSubmit={handleSubmit}>
                <input type="text" onChange={e=> (setIngredientName(e.target.value))} />
                <input type="text" onChange={e=> (setIngredientQuantity(e.target.value))} />
                <select id="unit" name="unit" onChange={e=>(setIngredientUnit(e.target.value))}>
                    <option value="oz">oz</option>
                    <option value="ml">ml</option>
                    <option value="unit">unit</option>
                </select>
                
                <input type="color" onChange={e => (setIngredientColor(e.target.value))}></input>
                <input id="submitButton" type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default AddIngredients;