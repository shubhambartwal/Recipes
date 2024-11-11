import React, { useState } from 'react'

const RecipePage = ({recipe}) => {
    const [ingredients,setIngredients]=useState([])
    const recipeIngredients=async(recipe)=>

        Object.keys(recipe).forEach(key=>{
            if (key.startsWith('strIngredient') && meal[key]) {
                setIngredients([...ingredients,])
              }
        })
    useEffect(()=>{})
  return (
    <div className='flex '>
        <div>
            <img src={recipe.strMealThumb} alt="meal image"/>

        </div>
        <div>
            <h2>{recipe.strMeal}</h2>
        </div>
    </div>
  )
}

export default RecipePage