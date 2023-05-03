import React, { useEffect, useState } from "react";

const TodaysSpeciality = ({ allrecipes }) => {
  const [todaysSpecial, setTodaysSpecial] = useState(null);
  // This below code finds random element from allrecipes array
  const randomIndex = Math.floor(Math.random() * allrecipes.length);
  const randomElement = allrecipes[randomIndex];
  useEffect(() => {
    setTodaysSpecial(randomElement);
  }, []);

  

  return (
    <section className="w-3/4  md:w-4/5 mx-auto mb-8 md:mb-12 bg-slate-300">
      <div className="grid md:grid-cols-3">
        <div className="bg-amber-400 p-5">
          <p className="text-2xl md:text-4xl">Today's Special recipe</p>
          <p className="text-2xl md:text-3xl pt-2 md:py-5">{todaysSpecial && todaysSpecial?.name}</p>
          <p className="">{todaysSpecial && todaysSpecial?.description}</p>
          <p className=""><span className="font-semibol">Ingridients: </span><br />{todaysSpecial && todaysSpecial?.ingredients.map(ingridient => <li>{ingridient}</li>)}</p>
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
