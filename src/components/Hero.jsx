import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { hero, CV } from "../assets";

const Hero = () => {
  return (
    <section
      className={`${styles.paddingX} flex flex-col sm:flex-row sm:justify-between sm:pt-[130px] pt-[100px] w-full mx-auto min-h-screen `}
    >
      <div className="flex gap-4 h-full">
        <div>
          <div className="w-1 h-full blue-gradient rounded-full" />
        </div>
        <div className="flex flex-col items-start xl:gap-5">
          <h1 className={`${styles.heroHeadText} -mt-4 flex flex-col`}>
            <span>Hi,</span>
            <span className="text-gradient">
              <Typewriter
                options={{
                  strings: ["I'm Hien,"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span>Web Developer</span>
          </h1>
          <div className="flex flex-col items-start gap-4">
            <button className="sm:w-[180px] w-[150px] h-[40px] sm:h-[50px] btn-gradient rounded-lg sm:text-lg font-medium">
              <a href="#contact">Contact me</a>
            </button>
            <a
              href={CV}
              download="NguyenHien_Web-Developer.pdf"
              className="border-2 border-cyan-700 px-4 py-2 
            sm:text-sm text-xs rounded-md download-btn cursor-pointer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="h-full ">
        <img
          src={hero}
          alt="hero-img"
          className="sm:w-[200px] md:w-[350px] lg:w-[400px] xl:w-full h-[400px] 
          object-contain z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
