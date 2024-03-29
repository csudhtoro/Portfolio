"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import headshot from "@/public/headshot2.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-28 sm:mt-28 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={headshot}
              alt="Dana portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1 }}
          >
            🖐🏾
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm
        <span className="font-bold"> Dana,</span> a seasoned
        <span className="font-bold"> software developer</span> boasting
        <span className="font-bold"> a decade of experience </span>
        in crafting technological solutions. I enjoy building both web and
        mobile apps and <span> my focuses are</span>
        <span className="font-bold">
          <span className="underline"> React (Next.js)</span> and{" "}
          <span className="underline">Native Android</span>
        </span>{" "}
        application development.{" "}
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row item-center justify-center gap-2 px-[8.5rem] text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="#contact"
          className="group text-xs sm:text-sm bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 cursor-pointer disabled:bg-opacity-65 disabled:scale-110 dark:text-gray-900 dark:bg-white dark-bg-opacity-10"
          onClick={() => {
            setActiveSection("Contact");
          }}
        >
          Say Hello!{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>

        <a
          className="group text-sm sm:text-sm bg-white flex items-center justify-center px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack transition dark:bg-white/10 dark:text-white/60"
          href="/DanaShortsResume.pdf"
          download={true}
        >
          Resume{" "}
          <HiDownload className="group-hover:translate-y-1 transition opacity-70" />
        </a>

        <a
          className="bg-white py-2 flex justify-center text-gray-700 hover:text-gray-950 sm:flex sm:items-center sm:p-4  gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/danashorts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          className="bg-white py-2 flex justify-center text-gray-700 hover:text-gray-950 sm:flex sm:items-center sm:p-4  gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/csudhtoro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
