import React, { useEffect, useState } from "react";
import ChefsOnLeft from "./ChefsOnLeft";
import ChefsOnRight from "./ChefsOnRight";

const ChefSection = ({chefs}) => {
    const [leftside, setLeftside] = useState([])
    const [rightside, setRightside] = useState([])
    
    useEffect(() =>{
      const left = chefs.filter(chef => parseInt(chef.id) % 2 !== 0)
      const right = chefs.filter(chef => parseInt(chef.id) % 2 === 0)
      setLeftside(left)
      setRightside(right)
    }, chefs)
    
    

  return (
    <section className="w-3/4 md:1/2 mx-auto mb-8 md:mb-12">
      <h2 className="text-2xl md:text-5xl text-amber-500 font-semibold text-center mb-8 md:mb-24 ">
        Meet our Chefs
      </h2>
      <div className=" grid md:grid-cols-2 gap-16">
        <div>
          {
            leftside.map(data => <ChefsOnLeft key={data.id} data={data}></ChefsOnLeft>)
          }
        </div>
        <div>
          {
            rightside.map(data => <ChefsOnRight key={data.id} data={data}></ChefsOnRight>)
          }
        </div>
        
      </div>
    </section>
  );
};

export default ChefSection;
