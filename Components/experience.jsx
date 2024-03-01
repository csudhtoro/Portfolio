"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/app/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";
import { useTheme } from "next-themes";

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
      className="sm:mt-28 mt-28 scroll-mt-28 mb-28 sm:mb-28"
    >
      <SectionHeading>Experience</SectionHeading>

      <VerticalTimeline
        animate={false}
        intersectionObserver={inView}
        lineColor=""
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem"
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)"
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#374151",
                fontSize: "1.5rem"
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
