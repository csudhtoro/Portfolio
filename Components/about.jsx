"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
//import { motion } from "framer-motion";
//import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";
import dynamic from "next/dynamic";

const motion = dynamic(() => import("framer-motion"), { ssr: false });
const useInView = dynamic(() => import("react-intersection-observer"), {
  ssr: false
});

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="sm:mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a dedicated software developer, I am committed to translating
        concepts into refined, operational, and streamlined code. With expertise
        in core languages including <span className="font-bold">Java</span> and{" "}
        <span className="font-bold">JavaScript</span>, my versatility extends to
        encompassing a variety of other languages, frameworks, and development
        tools. Thriving within the tech landscape, my curiosity drives me to
        consistently explore trends and industry advancements.
      </p>

      <p>
        I take pride in my ability to tackle{" "}
        <span className="font-medium"> complex problems </span> and to
        collaborate effectively in a team environment. Whether it's building
        apps, or optimizing database performance,{" "}
        <span className="font-bold">
          {" "}
          I'm dedicated to delivering solutions
        </span>{" "}
        that make a positive impact. Welcome to my portfolio, an avenue through
        which you can explore my projects and witness my steadfast commitment to
        the craft of software development.
      </p>
    </motion.section>
  );
}
