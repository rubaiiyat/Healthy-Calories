import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ addToCookBtn }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-around items-center gap-5">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            addToCookBtn={addToCookBtn}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
