import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  const findMeal = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    setMeal(data.meals[0]);
  };

  useEffect(() => {
    findMeal();
  }, [id]);

  // Extract ingredients dynamically
  const ingredients = useMemo(() =>
    Object.keys(meal)
      .filter(key => key.startsWith('strIngredient') && meal[key])
      .map((ingredientKey, index) => {
        const ingredient = meal[ingredientKey];
        return { ingredient };
      }),
    [meal]
  );

  return (
    <div className='bg-gray-100 p-10 flex-1 min-h-screen text-black'>
      {/* Header Section */}
      <div className='flex flex-col items-center p-10'>
        <h1 className='text-3xl font-bold text-center text-gray-900'>{meal.strMeal}</h1>
        <div className=''>
          <p className='text-lg text-gray-700'>{meal.strArea}</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='flex justify-center flex-col md:flex-row'>
        {/* Left Section (Recipe Details and Ingredients) */}
        <div className='w-full md:w-[70%] px-4'>
          {/* Recipe Instructions */}
          <div className='my-6 '>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Recipe</h2>
            <p className='text-gray-700 shadow-md hover:shadow-xl px-4 pb-4 rounded-xl'>{meal.strInstructions}</p>
          </div>

          {/* Ingredients Section */}
          <div className='my-6'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              <span className='text-black font-bold '>Ingredients</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <div className="font-semibold text-lg text-gray-800">{item.ingredient}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Meal Image) */}
        <div className='flex justify-center h-2/3 mt-10 md:w-[30%]'>
          <img
            className='object-cover rounded-xl shadow-lg w-full h-auto max-w-sm'
            src={meal.strMealThumb}
            alt="Meal"
          />
        </div>
      </div>

      {/* Video Tutorial Section */}
      {meal.strYoutube && (
        <div className='my-10'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Video Tutorial</h2>
          <div className='flex justify-center'>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage;
