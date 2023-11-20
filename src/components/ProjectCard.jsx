import React from "react";
import { github } from "../assets";
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[460px]">
      <div
        className="relative w-full h-[230px] cursor-pointer"
        onClick={() => window.open(project.demo, "_blank")}
      >
        <img
          src={project.img}
          alt="project-img"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end">
          <div
            onClick={() => window.open(project.sourceCode, "_blank")}
            className="flex items-center justify-center black-gradient w-10 h-10 rounded-full cursor-pointer"
          >
            <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white/60 font-bold text-[20px]">{project.name}</h3>
        <p className="text-white/30 font-thin">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
