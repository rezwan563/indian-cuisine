import React from "react";

const ErrorPage = () => {
  return (
    <div className="grid md:grid-cols-2 my-8 md:my-16 ">
      <div className="md:mx-auto">
        <img
          className="border shadow-md "
          src="/error_404.avif"
          alt=""
        />
      </div>
      <div className="mt-8">
        <h1>
          <span className="text-lg md:text-3xl text-amber-400 font-semibold">
            Opps!
          </span>{" "}
          <span className="md:text-3xl">You seem to be lost</span>
        </h1>
        <p className="md:text-2xl md:mt-12">You can return to home page</p>
      </div>
    </div>
  );
};

export default ErrorPage;
