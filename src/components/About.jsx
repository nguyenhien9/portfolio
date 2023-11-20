import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educations, experiences } from "../constants";
import TimelineCard from "./TimelineCard";
import ExperienceCard from "./ExperienceCard";

const About = () => {
  return (
    <section id="about" className={`${styles.paddingX} w-full mx-auto pb-6`}>
      <div className="pt-16 pb-6">
        <motion.h2
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-gradient`}
        >
          About
        </motion.h2>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="sm:w-7/12 w-full sm:text-lg text-md tracking-wide text-slate-400"
      >
        Previously, I had a background in the manufacturing process and spent
        about 4 years for it. However, a strong passion with technology and
        development has persuaded me to resign my job and started learning
        coding. I am highly enthusiastic about web design and development that
        is now more and more popular. I really enjoy building high performance
        and wonderful UI website for users.
      </motion.p>
      <div className="mt-10 ">
        <VerticalTimeline lineColor="linear-gradient(60deg, rgb(18, 6, 29) 6.5%, #30cfd0 93.2%)">
          {educations.map((edu) => {
            return <TimelineCard key={edu.id} {...edu} />;
          })}
        </VerticalTimeline>
      </div>
      <div className="mt-20 flex justify-center">
        <ul className="flex sm:flex-row flex-col gap-6 sm:gap-20">
          {experiences.map((exp, index) => {
            return (
              <motion.li
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                key={exp.id}
                className=""
              >
                <ExperienceCard experience={exp} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
