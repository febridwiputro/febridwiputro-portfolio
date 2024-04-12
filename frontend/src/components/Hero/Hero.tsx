import React from "react";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-between mt-12 mx-10 md:mx-20">
      <div className="w-1/2">
        <div className="flex flex-col items-start text-white z-10">
          <h1 className="text-5xl font-extrabold leading-snug md:text-7xl">
            Hi, I'm Febri
          </h1>
          <p className="text-2xl mt-6 md:text-3xl">
          I'm a software engineer with 3 years of experience using Python and Java. Reach out if you'd like to learn more!
          </p>
          <a
          href="mailto:putrodwifebri@gmail.com"
          className="bg-blue-600 text-white rounded-full px-8 py-4 text-xl md:text-2xl font-semibold shadow-md"
        >
          Contact Me
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/febri2.png")}
        alt="Hero image of me"
        className="w-1/2 animate-float"
      />
      <div className="top-blur"></div>
      <div className="bottom-blur"></div>
    </section>
  );
};