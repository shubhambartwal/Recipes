import React from 'react'
import { Heart,Circle } from 'lucide-react'
const RecipeCard = () => {
  return (   
    <div className='flex flex-col  rounded-md  bg-green-500 overflow-hidden  p-2 relative'>
     <a href="#" className=' relative h-32'>
       <img src="https://picsum.photos/200/300" alt="food image" className='rounded-md w-full h-full  object-cover  cursor-pointer'/>
     <div className='absolute top-1 right-2  bg-white rounded-full p-1 cursor-pointer'> 
        <Heart size={20} className='hover:fill-red-500 hover:text-red-500 '/>
     </div>
     
     </a>
     <div className=' flex mt-1 relative'>
       <p className='font-bold tracking-wide text-white' >Roasted Chicken</p>
       {/* <div className='absolute right-2 top-1 '><Circle size={20} className='fill-red-500'/></div> */}
     </div> 
     <p className='text-white'>Indian Dish</p>
    </div> 
  )
}

export default RecipeCard