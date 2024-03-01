"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData, minorProjectsData } from "@/app/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import dynamic from "next/dynamic";

export default function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <div>
      <section
        ref={ref}
        id="projects"
        className="scroll-mt-28 mt-28 sm:mt-28 sm:mb-28 mb-28"
      >
        <SectionHeading>Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
        <div className="w-fit mx-auto my-3 sm:my-8">
          {showMoreProjects ? (
            minorProjectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))
          ) : (
            <div className="hidden"></div>
          )}
        </div>
        <div className="w-fit mx-auto my-3 sm:my-8 group outline-none focus:scale-105 hover:scale-105 active:scale-105 cursor-pointer borderBlack/10 transition">
          <button
            className=""
            onClick={() => setShowMoreProjects(!showMoreProjects)}
          >
            {showMoreProjects ? (
              <div className=" text-sm mb-8">
                <div className="w-full">
                  <FaChevronUp
                    size={30}
                    className="text-gray-900/50 mx-auto group-hover:-translate-y-1 transition opacity-70 dark:text-white/70"
                  />
                </div>
              </div>
            ) : (
              <div className="text-sm mb-8">
                <div className="w-full">
                  <FaChevronDown
                    size={30}
                    className="text-gray-900/50 mx-auto group-hover:translate-y-1 transition opacity-70 dark:text-white/70"
                  />
                </div>
              </div>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}
