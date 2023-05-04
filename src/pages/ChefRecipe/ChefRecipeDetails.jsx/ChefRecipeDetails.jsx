import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@smastrom/react-rating";
import LazyLoad from 'react-lazy-load';

import "@smastrom/react-rating/style.css";

const ChefRecipeDetails = ({ recipe }) => {
  const { id, name, description, rating, imgUrl, ingredients, instructions } =
    recipe;
  const ingridientText = ingredients.join();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    const notify = () => toast.success("Recipe added to favourites list");
  };
  return (
    <div className="grid md:grid-cols-3 bg-yellow-100 rounded-md">
      <div className=" md:p-4 md:col-span-2 p-2 ">
        <p className="text-2xl md:text-4xl pt-2 md:pb-5">{name}</p>
        <p className="py-4">{description}</p>
        <p className="py-4">
          <span className="font-semibold">Ingredients:</span> {ingridientText}
        </p>
        <p>
          <span className="font-semibold">Cooking Method:</span>
          <br />
          {instructions?.map((instruction) => (
            <li>{instruction}</li>
          ))}
        </p>
        <p className="my-3">Rating: {rating} <Rating style={{ maxWidth: 130 }} value={rating} readOnly /></p>
        <button
          disabled={isClicked}
          onClick={() => {
            toast.success(`${name} added to favourites`);
            setIsClicked(true);
          }}
          className={`mb-2 md:px-4 md:py-2 shadow-lg bg-amber-500 text-white ${
            isClicked ? "bg-gray-200 text-gray-300" : ""
          }`}
        >
          Add to favourite
        </button>
      </div>
      <div className="">
        <img className="w-full" src={imgUrl} alt="" />
      </div>
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </div>
  );
};

export default ChefRecipeDetails;
