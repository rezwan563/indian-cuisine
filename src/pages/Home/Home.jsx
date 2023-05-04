import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Shared/Banner/Banner";
import { Link } from "react-router-dom";
import FeaturedRecipeOne from "./HomeComponents/FeaturedRecipeOne";
import FeaturedRecipeTwo from "./HomeComponents/FeaturedRecipeTwo";
import ChefSection from "./HomeComponents/ChefSection";
import TodaysSpeciality from "./HomeComponents/TodaysSpeciality";
import LocationMap from "./HomeComponents/LocationMap";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [allrecipes, setAllRecipes] = useState([]);
  const [todaysSpecial, setTodaysSpecial] = useState(null);
 

  useEffect(() => {
    fetch(
      "https://assignment-10-indian-cuisine-server-rezwan563.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://assignment-10-indian-cuisine-server-rezwan563.vercel.app/recipes"
    )
      .then((res) => res.json())
      .then((data) => {
        const arrLength = data.length;
        // console.log(arrLength);
        setAllRecipes(data);
        const twoRecipes = data.filter((i) => parseInt(i.id) < 3);
        // This below code finds random todays special recipe from allrecipes array
        if (data) {
          // console.log('if er moddhe')
          const randomIndex = Math.floor(Math.random() * (data.length));
          // console.log("index", randomIndex);
          const randomElement = data[randomIndex];
          // console.log("randomelement", randomElement);
          setTodaysSpecial(randomElement);
        }
        setRecipes(twoRecipes);
      });
  }, []);

  return (
    <div>
      <section className="bg-img-container">
        <Banner></Banner>
        <div className="bottom-left text-3xl font-bold md:text-7xl">
          Food that you <span className="">crave</span>
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
        {/* Featured two recipes section */}
        {recipes.length === 2 &&
          recipes
            .slice(0, 1)
            .map((recipe) => (
              <FeaturedRecipeOne
                key={recipe.id}
                recipe={recipe}
              ></FeaturedRecipeOne>
            ))}
        {recipes.length === 2 &&
          recipes
            .slice(1, 2)
            .map((recipe) => (
              <FeaturedRecipeTwo
                key={recipe.id}
                recipe={recipe}
              ></FeaturedRecipeTwo>
            ))}
      </section>
      <section>
        {chefs.length > 0 && <ChefSection chefs={chefs}></ChefSection>}
      </section>
      <section>
        {
          todaysSpecial && <TodaysSpeciality todaysSpecial={todaysSpecial}></TodaysSpeciality>
        }
      </section>
      <section>
        <LocationMap></LocationMap>
      </section>
    </div>
  );
};

export default Home;
