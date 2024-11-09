import React from 'react'
import RecipeCard from '../components/RecipeCard'

const FavouritesPage = () => {
  const fav=true
  return (
    <div className='flex-1  p-10 min-h-screen bg-red-50'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text.-5xl my-4 text-black'>My Favourites</p>
        {!fav && (<div className='h-[80vh] flex flex-col items-center gap-4'>
          <img src="./sdf" alt="404 image"/>
        </div>)}
        {fav &&(<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>

        </div>)}
      </div>
    </div>
  )
}

export default FavouritesPage