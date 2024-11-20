import { Circle, Heart, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { useSelector } from 'react-redux'
const FavouritePage = () => {
  const fav = useSelector((state) => state.favourite.favourites);
  console.log(fav)
  const [favRecipes, setFavRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const getFavRecipes = async () => {
    try {
      const recipes = await Promise.all(
        fav.map(async (id) => {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
          const data = await res.json();
          return data.meals[0]; // Assuming you want the first meal from the response
        })
      );

      setFavRecipes(recipes); // Update the state with all fetched recipes
      setLoading(false); // Set loading to false once all recipes are fetched
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
    }
  }
  useEffect(() => {getFavRecipes()
  console.log(fav)}, [fav])
   console.log(favRecipes)
  return (
    <div className='bg-slate-300 p-10 flex-1 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl mt-5 text-black'>Favourite Recipies</p>
        <p className='text-slate-500 font-semibold ml-1 my-2  text-sm  tracking-tight'>Popular choices</p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {!loading && favRecipes.map((recipe,index) => <RecipeCard  key={index} recipe={recipe} flag={true} />)}
          {loading && [...Array(9)].map((_, index) => (
            <div key={index }className='flex flex-col  rounded-md  gap-3  p-2  '>
              <div className='skeleton relative  w-full h-[30vh]'></div>
              <div className=' flex  flex-col gap-1 '>
                <div className='skeleton w-full h-8' ></div>
                <div className='skeleton  w-full h-8'></div>
              </div>
            </div>
          )
          )
          }
        </div>
      </div>
    </div>
  )
}

export default FavouritePage