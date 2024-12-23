import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
