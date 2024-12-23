import React from "react";
import { FaRegClock, FaFire } from "react-icons/fa";
const Recipe = ({ recipe }) => {
  const {
    title,
    image_url,
    short_description,
    ingredients,
    cook_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <figure className="px-5 pt-10">
          <img
            src={image_url}
            alt="Dish"
            className="rounded-xl w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title text-white text-lg md:text-xl">{title}</h2>
          <p className="text-sm md:text-base">{short_description}</p>
          <h1 className="text-lg font-bold text-white mt-3">
            Ingredients: {ingredients.length}
          </h1>
          <ul className="list-disc pl-5">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="pl-2">
                {ingredient}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-5 mt-3">
            <h1 className="flex items-center gap-2 text-sm md:text-base">
              <FaRegClock /> {cook_time} minutes
            </h1>
            <h1 className="flex items-center gap-2 text-sm md:text-base">
              <FaFire /> {calories}
            </h1>
          </div>

          <div className="card-actions mt-4">
            <button className="btn btn-primary w-full md:w-auto">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
