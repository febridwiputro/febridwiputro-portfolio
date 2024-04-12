import React, { useState } from "react";
import { getImageUrl } from "../../utils";

import skills from "../../data/skills.json";
import history from "../../data/history.json";

interface Skill {
  title: string;
  imageSrc: string;
}

interface HistoryItem {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
}

export const Experience = () => {
  const [visibleSkills, setVisibleSkills] = useState(skills.slice(0, 9));

  const handleSkillScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      event.currentTarget.scrollHeight - event.currentTarget.scrollTop ===
      event.currentTarget.clientHeight;

    if (bottom) {
      const nextIndex = visibleSkills.length;
      const nextItems = skills.slice(nextIndex, nextIndex + 9);
      setVisibleSkills((prevVisibleSkills) => [...prevVisibleSkills, ...nextItems]);
    }
  };

  return (
    <section className="container text-white mt-12 mx-auto">
      <h2 className="title text-5xl font-bold uppercase">Experience</h2>
      <div className="content flex flex-row justify-between mt-14">
        <div className="skills w-1/2 flex flex-wrap gap-10" style={{ overflowY: "auto", maxHeight: "500px" }} onScroll={handleSkillScroll}>
          {visibleSkills.map((skill: Skill, id: number) => (
            <div key={id} className="skill flex flex-col items-center gap-4">
              <div className="skillImageContainer rounded-full bg-gray-800 flex items-center justify-center w-32 h-32">
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className="w-20" />
              </div>
              <p className="text-xl font-medium">{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className="history w-1/2 flex flex-col gap-10" style={{ overflowY: "auto", maxHeight: "500px" }}>
          {history.map((historyItem: HistoryItem, id: number) => (
            <li
              key={id}
              className="historyItem flex flex-row items-center gap-4 bg-gradient-to-r from-gray-800 to-transparent rounded-lg p-6"
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                className="w-12"
              />
              <div className="historyItemDetails">
                <h3 className="text-2xl font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p className="text-base font-normal">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul className="text-lg font-normal list-disc ml-5">
                  {historyItem.experiences.map((experience: string, id: number) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};