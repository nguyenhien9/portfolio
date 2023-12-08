import React from "react";
import { hero } from "../assets";
const HeroImage = () => {
  return (
    <div className="relative">
      <div className="w-[450px] h-[450px] border-4 rounded-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]">
          <img src={hero} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
