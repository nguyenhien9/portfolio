import React, { useState, useRef } from "react";
import { styles } from "../styles";
import { contact } from "../assets";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!info.name || !info.email || !info.msg) {
      toast.error("All fields required!");
      setError(true);
    } else {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: info.name,
            from_email: info.email,
            to_name: "Nguyen Hien",
            to_email: "ngnghien5588@gmail.com",
            message: info.msg,
          },
          "z8lczYgMYmZGJ7_C7"
        )
        .then(
          () => {
            setLoading(false);
            toast.success("Thank you. I will reply you as soon as possible.");
            setInfo({
              name: "",
              email: "",
              msg: "",
            });

            setError(false);
          },
          (error) => {
            setLoading(false);
            toast.error("Something went wrong! Try again.");
          }
        );
    }
  };
  return (
    <section
      id="contact"
      className={`${styles.paddingX} w-full mx-auto mt-8 min-h-screen pb-6 overflow-hidden`}
    >
      <div className="pt-16 pb-2">
        <motion.h2
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-gradient`}
        >
          Contact
        </motion.h2>
      </div>
      <div className="flex items-center justify-between gap-28">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          className="bg-tertiary p-6 sm:w-5/12 min-h-[500px] rounded-md"
        >
          <h3 className="text-[20px] font-semibold text-indigo-500">
            Leave me some messages
          </h3>
          <p className="mt-2 text-cyan-300 ">
            I am actively seeking full-time employment. If you have any
            questions or would like to discuss further, please feel free to
            email me.
          </p>
          <form
            ref={form}
            className="flex flex-col gap-4 mt-5"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col gap-2 ">
              <span className="text-emerald-400 font-thin tracking-wide ">
                Your name:
              </span>
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className={`w-full py-1 px-2 rounded-sm text-slate-400 tracking-wide text-md ${
                  error && "border-rose-600 placeholder:text-rose-600"
                } `}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-emerald-400 font-thin tracking-wide ">
                Your email:
              </span>
              <input
                type="email"
                name="email"
                value={info.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                className={`w-full py-1 px-2 rounded-sm text-slate-400 tracking-wide text-md ${
                  error && "border-rose-600 placeholder:text-rose-600"
                }`}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-emerald-400 font-thin tracking-wide ">
                Your message:
              </span>
              <textarea
                rows={2}
                type="text"
                name="msg"
                value={info.msg}
                onChange={handleChange}
                placeholder="Your message..."
                className={`w-full rounded-sm py-1 px-2 text-slate-400 tracking-wide text-md ${
                  error && "border-rose-600 placeholder:text-rose-600"
                }`}
              />
            </label>
            <div className="mt-2">
              <button
                type="submit"
                className="w-full py-2 px-4 btn-gradient rounded-md"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          className="p-6 hidden sm:block grow h-full "
        >
          <img
            src={contact}
            alt="contact-img"
            className="h-[500px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
