import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefsOnLeft = ({ data }) => {
  const { id, name, imgUrl, experience, likes, numRecipes } = data;
  return (
    <div className="bg-slate-100 p-3 mb-8 rounded-lg">
      <div>
        <h1 className="text-2xl dark:text-black md:text-3xl">{name}</h1>
        <ul>
          <li className="font-semibold dark:text-black shadow-sm">
            {experience} years of experience
          </li>
          <div className="flex">
            <div className=" border-2 dark:text-white shadow-lg rounded-md p-3 bg-amber-400">
              {numRecipes} recipes
            </div>
            <div className="border-2 dark:text-white  shadow-lg rounded-md p-3 bg-amber-400 ">
              {likes} likes
            </div>
            <div className=" border-2 shadow-lg rounded-md p-3 bg-amber-400 hover:bg-white dark:text-white dark:hover:text-black hover:text-amber-500">
              <Link to={`/chef_recipe/${id}`}>
                <button className="flex gap-2 items-center">
                  View recipes <FaArrowRight></FaArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </ul>
      </div>
      <LazyLoad height='full' offset={100}>
        <img className="order-first" src={imgUrl} alt="" />
      </LazyLoad>
    </div>
  );
};

export default ChefsOnLeft;
