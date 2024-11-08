import { Circle, Heart, Search } from 'lucide-react'
import React from 'react'
import RecipeCard from '../components/RecipeCard'

const HomePage = () => {
  return (
    <div className='bg-slate-300 p-10 flex-1 min-height-screen'>
      <div className='max-w-screen-lg mx-auto'>
      <form>
        <label className='input shadow-md flex items-center gap-2 '><Search size={"24"}/>
        <input type="text" className='text-sm md:text-md grow'
        placeholder='What do you want to eat today?'/>
        </label>
      </form>
      <p className='font-bold text-3xl md:text-5xl mt-5 text-black'>Recommended Recipes</p>
      <p className='text-slate-500 font-semibold ml-1 my-2  text-sm  tracking-tight'>Popular choices</p>
      <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <RecipeCard/>
        </div>
      </div>
    </div>
  )
}

export default HomePage