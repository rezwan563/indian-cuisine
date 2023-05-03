import React from "react";
import Banner from "../Shared/Banner/Banner";

const Blog = () => {
  return (
    <section>
      <section className="bg-img-container">
        <Banner></Banner>
        <div className="bottom-left text-3xl font-bold md:text-5xl">Blog</div>
      </section>
      <div className="w-3/4 md:w-2/3 mx-auto my-8 md:my-36">
        <div className="border shadow-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
          <p className="font-semibold mb-2 md:mb-4">Controlled and uncontrolles components</p>
          <p>Ans: </p>
        </div>
        <div className="border shadow-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
          <p className="font-semibold mb-2 md:mb-4">How to validate React props using PropTypes?</p>
          <p>Ans: </p>
        </div>
        <div className="border shadow-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
          <p className="font-semibold mb-2 md:mb-4">Difference between nodejs and express js</p>
          <p>Ans: </p>
        </div>
        <div className="border shadow-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
          <p className="font-semibold mb-2 md:mb-4">What is a custom hook, and why will you create a custom hook?</p>
          <p>Ans: </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
