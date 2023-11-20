import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.paddingX} w-full mx-auto mt-8 min-h-screen `}
    >
      <div className="pt-16 pb-6">
        <motion.h2
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-gradient`}
        >
          Projects
        </motion.h2>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="sm:w-7/12 w-full sm:text-lg text-md tracking-wide text-slate-400"
      >
        What I have done ...
      </motion.p>

      <div className="mt-10">
        <ul className="flex flex-col sm:flex-row gap-10 ">
          {projects.map((project, index) => (
            <motion.li
              variants={fadeIn("right", "spring", index * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
