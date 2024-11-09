import React from 'react'
import { Heart, Circle } from 'lucide-react'
const RecipeCard = () => {
    return (
        <div className='flex flex-col  rounded-md  hover:bg-green-500 overflow-hidden  p-2 relative h-[40vh] hover:ring ring-[#e1e3e4] '>
            <a href="#" className=' relative  w-full h-2/3'>
                <img src="https://picsum.photos/200/300" alt="food image" className='rounded-md w-full h-full  object-cover  cursor-pointer' />
                <div className='absolute top-1 right-2  bg-white rounded-full p-1 cursor-pointer'>
                    <Heart size={20} className='hover:fill-red-500 hover:text-red-500 ' />
                </div>

            </a>
            <div className='h-1/3'>
                <div className=' flex mt-1 relative'>
                    <p className='font-bold tracking-wide text-black' >Roasted Chicken</p>
                    <div className='absolute right-2 top-1 '><Circle size={20} className='fill-red-700' /></div>
                </div>
                <p className='text-black'>Indian Dish</p>
            </div>
        </div>

    )
}

export default RecipeCard