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
      <div className="card bg-base-100 max-w-96 md:max-w-96 lg:max-w-96 mx-auto shadow-2xl">
        <figure className="px-5 pt-10 ">
          <img src={image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title text-white">{title}</h2>
          <p>{short_description}</p>
          <h1 className="text-xl font-bold text-white">
            Ingredients: {ingredients.length}
          </h1>

          {ingredients.map((ingredient, index) => (
            <span key={index}>
              <li className="px-7">{ingredient}</li>
            </span>
          ))}

          <div className="flex gap-10">
            <h1 className="flex items-center gap-2">
              <FaRegClock /> {cook_time} minutes
            </h1>
            <h1 className="flex items-center gap-2">
              <FaFire /> {calories}{" "}
            </h1>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
