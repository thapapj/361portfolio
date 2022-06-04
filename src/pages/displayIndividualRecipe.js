import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import Ingredient from "../components/ingredient";
import "../styles/individualRecipe.css"
import colorCreator from "../components/colorCreator";
import colorRemover from "../components/colorRemover";
import changeButtonm from "../components/changeButtonm";

function IndividualRecipe() {
    const [lastColor, setLastColor] = useState(["#ffffff"])
    const [currentColor, setCurrentColor] =useState("#ffffff")
    let {id} = useParams();
    const [recipeDatas, setRecipeData] = useState([]);

    useEffect(()=>{
        fetch(`/recipe/?id=${id}`)
        .then(response => response.json())
        .then(data =>{
            // console.log(data)
            setRecipeData(data)
        })
    }, [id]);

    const changeColor = (color) =>{
        let newColor = colorCreator(color, currentColor);
        setCurrentColor(newColor);
        let tempArray = [...lastColor]
        tempArray.push(newColor)
        setLastColor(tempArray)
        
    }

    const reverseColor = (colorA) =>{
        let tempArray = [...lastColor]
        let color = tempArray.pop()
        color = tempArray.pop()
        setLastColor(tempArray)
        setCurrentColor(color)

        // let newColor = colorRemover( color, currentColor);
        // setCurrentColor(newColor);
    }

    useEffect(()=> {
        let colorDisplay = document.getElementById("colored")
        colorDisplay.style.backgroundColor= currentColor
    }, [currentColor])

    return(
        <div className="individual recipe">
            
            <table className="recipe name">
                <thead>
                {recipeDatas.name}
                </thead>
                <tbody>
                {recipeDatas.ingredient?
                 recipeDatas.ingredient.map((ingredient, i) => <Ingredient ingredientData={ingredient} changeColor={changeColor} reverseColor={reverseColor} key={i} />)
                 : <tr></tr>
                 }
                 </tbody>
            </table>
            
            <div id="colored" className="colorDisplay">
                Add Recipe to view color
            </div>
        </div>
    )
}

export default IndividualRecipe