import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { GiGraduateCap } from "react-icons/gi";

const TimelineCard = (education) => {
  const { title, academy, time, desc, bg } = education;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: bg,
        backgroundSize: "contain",
        backgroundPosition: "center",
        zIndex: "0",
        color: "white",
        boxShadow: "1px 5px 50px rgba(255,255,255,.2)",
      }}
      date={time}
      iconStyle={{ background: "#2D848A", color: "lightBlue" }}
      icon={<GiGraduateCap />}
    >
      <h3 className="text-lightBlue text-2xl font-bold">{academy}</h3>
      <p className="text-white font-thin">{title}</p>
      <ul className="flex items-center flex-wrap gap-5 ">
        {desc.map((elem) => {
          return (
            <li key={elem}>
              <p className={`text-white bg-[#2D898B] px-2 text-lg rounded-md `}>
                {elem}
              </p>
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

export default TimelineCard;
