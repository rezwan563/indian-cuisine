import React from "react";

const FeaturedRecipeTwo = () => {
  return (
    <div className="w-3/4 md:w-2/3 mx-auto mb-8 md:mb-24">
      <div className="grid md:grid-cols-2">
      <div>
          <h1 className="text-black md:text-2xl w-8 md:w-0">Doi Makhni</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ratione quia eius blanditiis rerum dolorem minima architecto, ullam
            maiores exercitationem cupiditate facilis harum debitis dolorum
            doloremque obcaecati provident esse optio modi at! Molestias impedit
            laudantium facilis architecto nemo non fugiat dignissimos sed rerum
            animi. Illum laudantium quis quaerat quae nam?
          </p>
        </div>
        <div className="place-self-end order-first md:order-none border-slate-200 shadow-xl w-full md:w-96 image-full">
          <figure>
            <img className="rounded" src="/fav_icon.avif" alt="Shoes" />
          </figure>
        </div>
      
      </div>
    </div>
  );
};

export default FeaturedRecipeTwo;
