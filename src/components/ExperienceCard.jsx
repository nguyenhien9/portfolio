import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const ExperienceCard = ({ experience }) => {
  return (
    <div
      className="min-h-[280px] sm:w-[400px] w-full p-4 bg-tertiary border-t-4
       border-white rounded-xl"
    >
      <h3 className="text-2xl font-bold tracking-wider">{experience.title}</h3>
      <h4 className="text-lg font-semibold tracking-wide text-slate-300">
        {experience.company}
      </h4>
      <p className="text-sm text-slate-400">{experience.time}</p>
      <ul className="px-4 py-4 list-disc marker:text-indigo-300">
        {experience.description.map((desc) => {
          return (
            <li key={desc} className="rounded-md">
              <p className="text-indigo-300">{desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
