import React, { useEffect, useState } from "react";

const TodaysSpeciality = ({ todaysSpecial }) => {
  return (
    <section className="w-3/4  md:w-4/5 mx-auto mb-8 md:mb-12 bg-slate-300">
      <div className="grid md:grid-cols-3">
        <div className="bg-amber-400 p-5">
          <p className="text-2xl md:text-4xl dark:text-white">Today's Special recipe</p>
          <p className="text-2xl dark:text-white md:text-3xl pt-2 md:py-5">{todaysSpecial && todaysSpecial?.name}</p>
          <p className=" dark:text-white">{todaysSpecial && todaysSpecial?.description}</p>
          <p className=" dark:text-white"><span className="font-semibol">Ingridients: </span><br />{todaysSpecial && todaysSpecial?.ingredients?.map(ingridient => <li>{ingridient}</li>)}</p>
        </div>
        <div className=" md:col-span-2">
          <img className="w-full" src={todaysSpecial && todaysSpecial?.imgUrl} alt="" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default TodaysSpeciality;
