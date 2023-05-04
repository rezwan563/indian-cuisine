import React from "react";
import Banner from "../Shared/Banner/Banner";

const About = () => {
  return (
    <div>
      <section className="bg-img-container">
        <Banner></Banner>
        <div className="bottom-left text-3xl font-bold md:text-5xl">
          About us
        </div>
      </section>
      <div className="w-3/4 mx-auto my-8 md:my-12">
        <div className="shadow-sm p-5">
          <p className=" text-lg  pb-5">
            Welcome to our Indian Cuisine establishment! We take pride in
            offering authentic and delicious Indian cuisine that will transport
            you to the streets of India.
          </p>

          <p className="text-lg  pb-5">
            Our menu is carefully crafted to showcase the flavors and spices of
            India. From aromatic curries to tandoori specialties, our dishes are
            made with the freshest ingredients and are sure to satisfy your
            taste buds. We also offer vegetarian and gluten-free options to
            cater to all dietary needs.
          </p>

          <p className="text-lg  pb-5">
            Our chefs are highly skilled in the art of Indian cooking and use
            traditional techniques to create dishes that are bursting with
            flavor. We source our ingredients from the best suppliers to ensure
            that every dish is of the highest quality.
          </p>
          <p className="text-lg  pb-5">
            Whether you're looking for a romantic dinner or a night out with
            friends, our cozy and welcoming atmosphere provides the perfect
            setting. Our friendly staff is dedicated to making your dining
            experience a memorable one.
          </p>

          <p className="text-lg  pb-5">
            Thank you for choosing Indian Cuisine, and we look forward to
            serving you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
