import React from "react";
import { logo } from "../assets";
import { styles } from "../styles";
import { contacts, socials } from "../constants";
const Footer = () => {
  return (
    <footer className="bg-tertiary">
      <div
        className={`${styles.paddingX} py-6 flex flex-col gap-6 sm:flex-row `}
      >
        <div className="flex items-center sm:w-1/3 w-full">
          <a href="#">
            <img src={logo} alt="logo" className="h-20 object-contain block" />
          </a>
        </div>
        <div className="sm:w-1/3 w-full">
          <h4 className="font-semibold mb-2 italic tracking-wider">
            Contact me via
          </h4>
          <div>
            <ul className="flex flex-col gap-2">
              {contacts.map((contact) => {
                return (
                  <li
                    key={contact.id}
                    className="flex items-center gap-2 text-sm"
                  >
                    <img
                      src={contact.icon}
                      alt="icon"
                      className="w-6 footer-img"
                    />
                    <span className="hover:text-lightBlue font-thin">
                      {contact.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 italic tracking-wider">
            Social Media
          </h4>
          <ul className="flex gap-5">
            {socials.map((social) => {
              return (
                <li key={social.id}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <img
                      src={social.icon}
                      alt="icon"
                      className="w-[40px] h-[40px] "
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
