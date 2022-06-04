import React from "react";
import {MdAddBox, MdUndo, MdDeleteForever} from 'react-icons/md'
import deleteRecipe from "./deleteRecipe";
import {Link} from "react-router-dom"

function Ingredient({ingredientData, changeColor, reverseColor, _id})
{

        return(
        <div>
        <tr className={ingredientData.name} >
            <td>{ingredientData.name}</td>
            <td>{ingredientData.unit}</td>
            <td>{ingredientData.quantity}</td>
            <td onClick={
                () => changeColor(ingredientData.color)
                }> <MdAddBox/> </td> 
            <td onClick={
                () =>  reverseColor(ingredientData.color)
            }>
                <MdUndo />
            </td>
            <td>
                <MdDeleteForever onClick={deleteRecipe(_id)}/>
            </td>
        </tr>

        </div>
        
    )
}

export default Ingredient