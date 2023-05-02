import React from "react";

const FeaturedRecipeTwo = ({recipe}) => {
  const { id, name, imgUrl, description } = recipe;
  return (
    <div className="w-3/4 md:w-2/3 mx-auto mb-8 md:mb-24">
      <div className="grid md:grid-cols-2">
      <div>
          <h1 className="text-black md:text-2xl w-8 md:w-0">{name}</h1>
          <p>
            {description}
          </p>
        </div>
        <div className="place-self-end order-first md:order-none border-slate-200 shadow-xl w-full md:w-96 image-full">
          <figure>
            <img className="rounded" src={imgUrl} alt="Shoes" />
          </figure>
        </div>
      
      </div>
    </div>
  );
};

export default FeaturedRecipeTwo;
