import { Circle, Heart, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
const HomePage = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchRecipes = async (searchQeury) => {
    setLoading(true)
    setRecipes([])
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQeury}`)
      const data = await res.json()
      setRecipes(data.meals)
    } catch (error) {
      console.log(error.message)
    }
    finally {
      setLoading(false)
    }
  }
  const [favourites,setFavourites]=useState([])
  useEffect(() => { fetchRecipes("chicken") }, [])
  return (
    <div className='bg-slate-300 p-10 flex-1 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <form>
          <label className='input shadow-md flex items-center gap-2 '><Search size={"24"} />
            <input type="text" className='text-sm md:text-md grow'
              placeholder='What do you want to eat today?' />
          </label>
        </form>
        <p className='font-bold text-3xl md:text-5xl mt-5 text-black'>Recommended Recipes</p>
        <p className='text-slate-500 font-semibold ml-1 my-2  text-sm  tracking-tight'>Popular choices</p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {!loading && recipes.map((recipe,index) => <RecipeCard  key={index} recipe={recipe} flag={false} />)}
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

export default HomePage