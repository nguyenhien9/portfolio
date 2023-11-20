import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { links } from "../constants";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="w-full sticky top-0 bg-transparent backdrop-blur-lg z-50">
      <div
        className={`relative flex items-center justify-between ${styles.paddingX} py-4`}
      >
        <div className="flex items-center gap-40">
          <Link
            to="/"
            onClick={() => {
              setActive("");
              setToggle(false);
              window.scroll(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 object-contain" />
          </Link>
          <ul className="sm:flex hidden">
            {links.map((link) => {
              const { id, title } = link;
              return (
                <li
                  key={id}
                  className={`${active === title ? "text-lightBlue" : ""}
                  px-3 text-[18px] tracking-wider transition-colors duration-300 ease-in-out`}
                  onClick={() => setActive(title)}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="sm:hidden cursor-pointer"
          />
          <div
            className={`${
              toggle ? "translate-x-0 block" : "-translate-x-full"
            }  absolute left-0 top-20 w-full violet-gradient backdrop-blur-xl transition duration-300 ease-in-out `}
          >
            <ul>
              {links.map((link) => {
                const { id, title } = link;
                return (
                  <li
                    key={id}
                    className={`${
                      active === title
                        ? "text-lightBlue bg-slate-800"
                        : "text-indigo-100"
                    }
                  px-3 py-2 tracking-wider text-center text-[18px] font-medium transition-colors duration-300 ease-in-out`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(title);
                    }}
                  >
                    <a href={`#${id}`}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
