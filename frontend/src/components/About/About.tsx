import React from "react";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className="container bg-opacity-60 bg-gray-900 rounded-lg text-white mt-12 mx-auto">
      <h2 className="title text-5xl font-bold uppercase">About</h2>
      <div className="flex flex-row items-center mt-10">
        <img
          src={getImageUrl("about/febriAbout2.png")}
          alt="Me sitting with a laptop"
          className="w-1/3"
        />
        <ul className="text-white flex flex-col gap-10 ml-10">

          <li className="flex items-center rounded-lg p-6 bg-gradient-to-r from-gray-800 to-transparent transition duration-400 hover:bg-blue-400">
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div>
              <h3 className="text-3xl font-semibold">Backend Developer</h3>
              <p className="text-3xl">I have experience developing fast and optimized back-end systems and APIs</p>
            </div>
          </li>
          <li className="flex items-center rounded-lg p-6 bg-gradient-to-r from-gray-800 to-transparent transition duration-400 hover:bg-blue-400">
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div>
              <h3 className="text-3xl font-semibold">Fullstack Developer</h3>
              <p className="text-3xl">I have designed multiple landing pages and have created design systems as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};