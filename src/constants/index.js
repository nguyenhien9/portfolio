import { m } from "framer-motion";
import {
  html,
  css,
  js,
  react,
  redux,
  node,
  mongo,
  tailwind,
  git,
  webapp,
  expense,
  address,
  mail,
  phone,
  fb,
  github,
} from "../assets";
export const links = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];
export const educations = [
  {
    id: "nestech",
    title: "Javascript Development",
    academy: "Nestech",
    time: "Aug 2023 - Nov 2023",
    desc: ["JS", "NodeJs", "ExpressJs", "MongoDb"],
    bg: "linear-gradient(90deg, rgb(18, 6, 29) 1.5%, #43b1b1 203.2%)",
  },
  {
    id: "vti",
    title: "Front End Foundation",
    academy: "VTI Academy",
    time: "Feb 2023 - Jun 2023",
    desc: ["HTML", "CSS", "JS", "ReactJs", "Redux"],
    bg: "linear-gradient(90deg, rgb(18, 6, 29) 1.5%, #43b1b1 203.2%)",
  },
  {
    id: "bku",
    title: "Industrial System Engineer",
    academy: "HCM University of Technology",
    time: "Aug 2014 - Apr 2019",
    desc: ["Work Design", "Lean", "Optimization"],
    bg: "linear-gradient(90deg, rgb(18, 6, 29) 1.5%, #43b1b1 203.2%)",
  },
];
export const experiences = [
  {
    id: "rochdale",
    company: "Rochdale Spears Company",
    title: "Technical Training Executive",
    time: "Jan 2021 - Mar 2023",
    description: [
      "Training",
      "Managing workers skill",
      "Skill testing",
      "Making SOP videos",
      "Building Power BI Report",
    ],
    borderColor: "#fff",
  },
  {
    id: "pg",
    company: "Premier Global Garment Ltd Co.",
    title: "IE & Lean Staff",
    time: "Apr 2019 - Jan 2021",
    description: [
      "Making product layout",
      "Optimizing work motions",
      "Controlling defects",
      "Reducing wastes",
    ],
    borderColor: "#eee",
  },
];
export const skills = [
  { name: "html", icon: html },
  { name: "css", icon: css },
  { name: "js", icon: js },
  { name: "react", icon: react },
  { name: "redux", icon: redux },
  { name: "node", icon: node },
  { name: "mongo", icon: mongo },
  { name: "tailwind", icon: tailwind },
  { name: "git", icon: git },
];
export const projects = [
  {
    id: "expense",
    name: "Personal Expense Management",
    description:
      "A web-based platform that allows users to note down expense & income amount and show reports about them.",
    tags: [
      { name: "react", color: "text-cyan-500" },
      { name: "express", color: "text-emerald-500" },
      { name: "mongodb", color: "text-green-500" },
      { name: "tailwind", color: "text-sky-500" },
      { name: "framer-motion", color: "text-rose-500" },
      { name: "formik", color: "text-slate-500" },
      { name: "yup", color: "text-indigo-500" },
    ],
    demo: "https://expense-management-psi.vercel.app/",
    sourceCode: "https://github.com/nguyenhien9/expense_fe.git",
    img: expense,
  },
  {
    id: "webapp",
    name: "Webapp Demo",
    description:
      "A demo web-app allows tourists to find some famous placing to visit including maps, illustrations and so on.",
    tags: [
      { name: "react", color: "text-cyan-500" },
      { name: "tailwind", color: "text-sky-500" },
      { name: "framer-motion", color: "text-rose-500" },
    ],
    demo: "https://paris-web-app-demo.vercel.app",
    sourceCode: "https://github.com/nguyenhien9/web-app-demo.git",
    img: webapp,
  },
];
export const contacts = [
  { id: "email", text: "ngnghien5588@gmail.com", icon: mail },
  { id: "phone", text: "+84 393 558 821", icon: phone },
  {
    id: "address",
    text: "Long Thanh My Ward, Thu Duc City, HCMC",
    icon: address,
  },
];
export const socials = [
  { id: "fb", link: "https://www.facebook.com/hien.nguyen9604", icon: fb },
  { id: "github", link: "https://github.com/nguyenhien9", icon: github },
];
