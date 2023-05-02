import React from "react";
import { Link } from "react-router-dom";

const ChefsOnLeft = ({ data }) => {
  const { id, name, imgUrl, experience, likes, numRecipes } = data;
  return (
    <div className="bg-slate-100 p-3 mb-8 rounded-lg">
      <div>
        <h1 className="text-2xl md:text-3xl">{name}</h1>
        <ul>
          <li className="font-semibold shadow-sm">{experience} years of experience</li>
          <div className="flex">
            <div className=" border-2 shadow-lg rounded-md p-3 bg-amber-400">
              {numRecipes} recipes
            </div>
            <Link className=" border-2 shadow-lg rounded-md p-3 bg-amber-400 hover:bg-white hover:text-amber-500">
              <button>View recipes</button>
            </Link>
            <div>
              <div className="border-2 shadow-lg rounded-md p-3 bg-amber-400 ">
                {likes} likes
              </div>
            </div>
          </div>
        </ul>
      </div>
      <img className="order-first" src={imgUrl} alt="" />
    </div>
  );
};

export default ChefsOnLeft;
