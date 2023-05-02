import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Shared/Banner/Banner";
import { Link } from "react-router-dom";
import FeaturedRecipeOne from "./HomeComponents/FeaturedRecipeOne";
import FeaturedRecipeTwo from "./HomeComponents/FeaturedRecipeTwo";
import ChefSection from "./HomeComponents/ChefSection";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() =>{
    fetch('https://assignment-10-indian-cuisine-server-rezwan563.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
  },[])
  return (
    <div>
      <section className="bg-img-container">
        <Banner></Banner>
        <div className="bottom-left text-3xl font-bold md:text-7xl">
          Food that you <span className=''>crave</span>
          <br />
          <div className="text-left mt-5">
            <Link to="/about_us">
              <button className="text-base  border border-white px-3 py-2 hover:bg-white hover:text-amber-500">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <FeaturedRecipeOne></FeaturedRecipeOne>
        <FeaturedRecipeTwo></FeaturedRecipeTwo>
      </section>
      <section>
       {
        chefs.length > 0 && <ChefSection chefs={chefs}></ChefSection>
       }
      </section>
    </div>
  );
};

export default Home;
