import React, { useState } from "react";
import { toast } from "react-toastify";


const ChefRecipeDetails = ({ recipe }) => {
  const { id, name, description, imgUrl, ingredients, instructions } = recipe;
  const ingridientText = ingredients.join();
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () =>{
      const notify = () => toast.success('Recipe added to favourites list')

  }
  return (
    <div className="grid md:grid-cols-3 bg-yellow-100 rounded-md">
      <div className=" md:p-4 md:col-span-2 p-2 ">
        <p className="text-2xl md:text-4xl pt-2 md:pb-5">{name}</p>
        <p className="py-4">{description}</p>
        <p className="py-4"><span className="font-semibold">Ingredients:</span> {ingridientText}</p>
        <p><span className="font-semibold">Cooking Method:</span> 
        <br />
        {
            instructions?.map(instruction => <li>{instruction}</li>)
        }
         </p>
        <p className="my-3">Rating: </p>
        <button onClick={handleClick} className="mb-2 md:px-4 md:py-2 bg-white shadow-lg hover:bg-amber-500 hover:text-white ">
          Add to favourite
        </button>
      </div>
      <div className="">
        <img className="w-full" src="/fav_icon.avif" alt="" />
      </div>
    </div>
  );
};

export default ChefRecipeDetails;
