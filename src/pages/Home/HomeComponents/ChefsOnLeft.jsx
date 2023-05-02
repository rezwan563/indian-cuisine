import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ChefsOnLeft = ({ data }) => {
  const { id, name, imgUrl, experience, likes, numRecipes } = data;
  return (
    <div className="bg-slate-100 p-3 mb-8 rounded-lg">
      <div>
        <h1 className="text-2xl md:text-3xl">{name}</h1>
        <ul>
          <li className="font-semibold shadow-sm">
            {experience} years of experience
          </li>
          <div className="flex">
            <div className=" border-2 shadow-lg rounded-md p-3 bg-amber-400">
              {numRecipes} recipes
            </div>
            <div className="border-2 shadow-lg rounded-md p-3 bg-amber-400 ">
              {likes} likes
            </div>
            <div className=" border-2 shadow-lg rounded-md p-3 bg-amber-400 hover:bg-white hover:text-amber-500">
                  <Link>
                    <button className="flex gap-2 items-center">View recipes <FaArrowRight></FaArrowRight></button>
                  </Link>
                </div>
          </div>
        </ul>
      </div>
      <img className="order-first" src={imgUrl} alt="" />
    </div>
  );
};

export default ChefsOnLeft;
