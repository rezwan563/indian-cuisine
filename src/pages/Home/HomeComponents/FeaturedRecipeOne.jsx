import React from "react";

const FeaturedRecipeOne = ({recipe}) => {
  const { id, name, imgUrl, description } = recipe;
  return (
    <section className="w-3/4 md:w-2/3 mx-auto my-8 md:my-36">
      <div>
        <h1 className="text-2xl md:text-5xl text-amber-500 font-semibold text-center mb-8 md:mb-24">
          Riches of seasoning
        </h1>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="border-2 border-slate-200 shadow-xl w-full md:w-96 image-full">
          <figure>
            <img className="rounded" src={imgUrl} alt="Shoes" />
          </figure>
        </div>
        <div>
          <h1 className="text-black md:text-2xl w-8 md:w-0">{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipeOne;
