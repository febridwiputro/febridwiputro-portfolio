import React from "react";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    // <section className="container text-white mt-12 mx-auto">
    <footer id="contact" className="text-white bg-secondary mt-20 flex flex-row justify-evenly w-full py-12 px-10" style={{ background: '#19376D' }}>
      <div className="text">
        <h2 className="text-5xl font-bold leading-tight">Contact</h2>
        <p className="text-3xl font-normal mt-4">Feel free to reach out!</p>
      </div>
      <ul className="links flex flex-col items-start list-none gap-6">
        <li className="link flex items-center">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className="w-10 h-10" />
          <a href="mailto:putrodwifebri@gmail.com" className="text-white text-xl font-normal">putrodwifebri@gmail.com</a>
        </li>
        <li className="link flex items-center">
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" className="w-10 h-10" />
          <a href="https://www.linkedin.com/in/febridwiputro/" className="text-white text-xl font-normal">linkedin.com/in/febridwiputro</a>
        </li>
        <li className="link flex items-center">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className="w-10 h-10" />
          <a href="https://www.github.com/febridwiputro" className="text-white text-xl font-normal">github.com/febridwiputro</a>
        </li>
      </ul>
    </footer>
  );
};