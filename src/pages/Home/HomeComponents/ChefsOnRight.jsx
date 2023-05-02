import React from "react";
import { Link } from "react-router-dom";

const ChefsOnRight = ({ data }) => {
  const { id, name, imgUrl, experience, likes, numRecipes } = data;
  return (
    <div>
      <div className="bg-slate-100 p-3 mb-8 rounded-lg">
        <img className="" src={imgUrl} alt="" />
        <div>
          <h1 className="text-2xl md:text-3xl">{name}</h1>
          <ul>
            <li className="font-semibold shadow-sm">{experience} years of experience</li>
            <li className="w-full">
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
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChefsOnRight;
