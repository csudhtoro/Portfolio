"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
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
      <p className="mb-4">
        I'm a full-stack software engineer with over a decade of experience
        building and maintaining production systems that support real business
        operations. My work spans frontend, backend, and data layers — from
        developing <span className="font-medium">React</span> and{" "}
        <span className="font-medium">Next.js</span> applications to designing
        database schemas, optimizing queries, and integrating with external
        systems.
      </p>

      <p className="mb-4">
        In addition to my professional experience, I've built and shipped{" "}
        <span className="font-medium">SaaS and mobile applications</span> using
        modern technologies like{" "}
        <span className="font-medium">React Native (Expo)</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">PostgreSQL/Supabase</span>. These projects
        include subscription-based platforms, real-time data-driven features,
        and push notification systems, giving me hands-on experience with
        end-to-end product development — from architecture and implementation to
        deployment and iteration.
      </p>

      <p className="mb-4">
        I specialize in{" "}
        <span className="font-medium">JavaScript/TypeScript</span> and focus on
        building scalable, maintainable systems with clean architecture. I've
        led development efforts across complex internal tools and
        customer-facing applications, often working within existing systems to
        improve performance, reliability, and usability without disrupting
        operations.
      </p>

      <p>
        I approach problems with a strong emphasis on{" "}
        <span className="font-medium">clarity, correctness, and long-term maintainability</span>.
        Whether I'm building new features, debugging production issues, or
        designing data flows, I prioritize thoughtful decision-making and
        measurable impact. I'm especially interested in continuing to grow in
        full-stack and mobile development, and in building well-structured,
        user-focused applications at scale.
      </p>
    </motion.section>
  );
}
