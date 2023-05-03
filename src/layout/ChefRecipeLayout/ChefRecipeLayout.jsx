import React, { useEffect, useState } from "react";
import ChefRecipeBanner from "../../pages/ChefRecipe/ChefRecipeBanner.jsx/ChefRecipeBanner";
import ChefRecipeDetails from "../../pages/ChefRecipe/ChefRecipeDetails.jsx/ChefRecipeDetails";
import { useLoaderData } from "react-router-dom";

const ChefRecipeLayout = () => {
  const chefsData = useLoaderData();
  const [allrecipes, SetAllRecipes] = useState([]);
  const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    fetch(
      "https://assignment-10-indian-cuisine-server-rezwan563.vercel.app/recipes"
    )
      .then((res) => res.json())
      .then((data) => SetAllRecipes(data));
  }, []);

  return (
    <section className="">
      <div className="w-3/4 mx-auto bg-slate-100 p-4 rounded my-8 md:my-12">
        <ChefRecipeBanner chefsData={chefsData}></ChefRecipeBanner>
      </div>
      <div className="w-3/4 mx-auto my-8 md:my-12  shadow-lg p-2 rounded-sm">
        <p className="text-center text-2xl md:text-5xl text-amber-500 font-bold py-3 md:py-8">Recipes </p>
        <div className="grid md:grid-cols-2 gap-10">
          {allrecipes.length === 10 && (
            getMultipleRandom(allrecipes, 6).map(recipe => <ChefRecipeDetails key={recipe.id} recipe={recipe}></ChefRecipeDetails>)
          )}
        </div>
      </div>
    </section>
  );
};

export default ChefRecipeLayout;
