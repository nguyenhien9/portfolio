import React from "react";
import { styles } from "../styles";
import { skills } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Skills = () => {
  return (
    <section
      id="skills"
      className={`${styles.paddingX} pb-6 w-full mx-auto min-h-screen `}
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        className="pt-16 pb-6"
      >
        <h2 className={`${styles.sectionHeadText} text-gradient`}>Skills</h2>
      </motion.div>
      <div className="sm:mt-[100px] pt-6 mx-auto lg:w-2/3 w-full ">
        <ul className="flex flex-wrap lg:gap-20 gap-16 items-center justify-center">
          {skills.map((skill, index) => {
            return (
              <motion.li
                variants={fadeIn("right", "spring", index * 0.2, 0.75)}
                initial="hidden"
                whileInView="show"
                key={skill.name}
                className=" flex items-center justify-center w-[90px] h-[90px] 2xl:w-[120px] 2xl:h-[120px] custom-skill bg-dark rounded-full"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 2xl:w-24"
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
