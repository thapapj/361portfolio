

function deleteRecipe(_id){
    fetch(`/recipe/${_id}`,{
        method: 'DELETE'
    })
    .then(response => 
        {response.jsonb()
        return response
        })
}

export default deleteRecipe