import React,{useState,useEffect} from 'react'
import { Heart, Circle } from 'lucide-react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToFavourite } from '../store/FavouriteSlice';
const RecipeCard = ({recipe,flag}) => {
    const [meal,setMeal]=useState({})
    const [isFavourite,setIsFavourite]=useState(flag)
    const dispatch=useDispatch()
    const findRecipe=async(searchQuery)=>{
        try {
            const res= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchQuery}`)
            const data= await res.json()
            setMeal(data.meals[0])
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleFavourite=(e)=>{
// e.preventDefault()
dispatch(addToFavourite(recipe.idMeal));
setIsFavourite(!isFavourite)

    }
     useEffect (()=>{findRecipe(recipe.idMeal)},[recipe.idMeal])
    return (
        <div className='flex flex-col  rounded-md  hover:bg-green-500 overflow-hidden  p-2 relative h-[40vh] hover:ring ring-[#e1e3e4] '>
            <Link to={`/recipe/${recipe.idMeal}`} className=' relative  w-full h-2/3'>
                <img src={recipe.strMealThumb} alt="food image" className='rounded-md w-full h-full  object-cover  cursor-pointer' />
                <div className='absolute top-1 right-2  bg-white rounded-full p-1 cursor-pointer'
                onClick={(e)=>e.preventDefault()
                    // addRecipeToFavourite(recipe)
                }
                >
                    <Heart size={20} onClick={handleFavourite} className={`hover:fill-red-500 ${isFavourite?'fill-red-500':''} hover:text-red-500 `} />
                </div>

            </Link>
            <div className='h-1/3'>
                <div className=' flex mt-1 '>
                    <p className='font-bold tracking-wide text-black' >{recipe.strMeal}</p>
                     </div>
                <p className='text-black'>{meal.strArea}</p>
            </div>
        </div>

    )
}

export default RecipeCard