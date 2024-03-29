"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";
import { sendEmail } from "./actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.8
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 sm:mb-28 w-[min(100%,38rem)] text-center mt-28"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:dana.shortsjr@gmail.com">
          dana.shortsjr@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email Sent!");
          formRef.current.reset();
        }}
      >
        <input
          type="email"
          required={true}
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder-gray-900"
          placeholder="You@email.com"
          name="senderEmail"
        />
        <textArea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder-gray-900"
          placeholder="Your message"
          required={true}
          maxLength={5000}
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
