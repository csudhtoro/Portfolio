import React from "react";
import { MdWork } from "react-icons/md";
import { SiNextdotjs, SiReact } from "react-icons/si";
import QuantumImg from "@/public/Quantum_SS.PNG";
import playPalImg from "@/public/playPal_SS.PNG";
import FusionTVImg from "@/public/FusionTV_SS.png";
import NymsImg from "@/public/NYMS_SS.PNG";
import rationImg from "@/public/ration_screen.PNG";
import portfolioImg from "@/public/portfolio_screen.PNG";
import { FaGraduationCap } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    company: "JANUS et Cie",
    title: "Software Engineer",
    location: "Santa Fe Springs, California",
    description:
      "After advancing to the position of Software Engineer, I contributed to the development of a proprietary CRM application while concurrently pursuing my formal education.",
    icon: React.createElement(SiReact),
    date: "2014 - Present",
  },
  {
    company: "CSUF",
    title: "Graduated California State University, Fullerton",
    location: "Fullerton, California",
    description:
      "After a three-year journey, I successfully concluded my studies in the fall of 2018, achieving a Bachelor of Science degree in Computer Science with a concentration in Software Engineering.",
    icon: React.createElement(FaGraduationCap),
    date: "2015-2018",
  },
  {
    company: "JANUS et Cie",
    title: "Warranty Account Specialist",
    location: "Santa Fe Springs, California",
    description:
      "I worked as a Warranty Account Specialist before a promotion to Programmer and beginning my formal education.",
    icon: React.createElement(MdWork),
    date: "2010 - 2014",
  },
];

export const projectsData = [
  {
    title: "Quantum",
    description:
      "This blog application utilizes Next.js 13 (App Router & Server Actions) to efficiently manage page transitions and dynamic routing.",
    loginInfo: [],
    tags: [
      "React",
      "Next.JS",
      "Next-Auth",
      "Prisma",
      "Mongodb",
      "TailWind CSS",
      "React Quill",
    ],
    imageUrl: QuantumImg,
    url: "https://quantum-blogspace.vercel.app/",
  },
  {
    title: "PlayPal",
    description:
      "Next.js 13 app enables users to create posts and connect with other like-minded users for physical activities",
    loginInfo: ["Username: ritabook90@gmail.com", "Password: 123456"],
    tags: [
      "React",
      "Next.JS",
      "Next-Auth",
      "Firebase",
      "TailWind CSS",
      "Framer Motion",
      "MapBox",
    ],
    imageUrl: playPalImg,
    url: "https://playpal-connect.vercel.app/",
  },
  {
    title: "FusionTV",
    description:
      "Android app designed to provide detailed information about your favorite tv shows and offering a convenient way to save and organize your favorites.",
    loginInfo: [],
    tags: [
      "Java",
      "Android SDK",
      "Firebase",
      "Material Design",
      "ViewModel",
      "Gson",
    ],
    imageUrl: FusionTVImg,
    url: "https://github.com/csudhtoro/FusionTV",
  },
];

export const minorProjectsData = [
  {
    title: "Nyms",
    description:
      "A word guessing game in which players use their wit and parts of speech to reveal the secret word.",
    loginInfo: [],
    tags: [
      "Java",
      "Android SDK",
      "Material Design",
      "ViewModel",
      "Rounded Corner Progress Bar",
    ],
    imageUrl: NymsImg,
    url: "https://github.com/csudhtoro/Nyms",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio site to showcase my experience and skills as a Software Developer.",
    loginInfo: [],
    tags: ["React", "Next.js", "Tailwind CSS", "clsx", "Framer Motion"],
    imageUrl: portfolioImg,
    url: "https://dana-shorts-dev.vercel.app/",
  },
  {
    title: "Ration",
    description:
      "A fully responsive front-end mock-up project ideal for a food delivery service website. It features filtering, routing and shopping cart and search functionalities.",
    loginInfo: [],
    tags: ["React", "Framer Motion", "React Router V6", "Tailwind CSS"],
    imageUrl: rationImg,
    url: "https://ration.vercel.app/",
  },
];

export const skillsData = [
  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#F44336"
          d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
        ></path>
        <path
          fill="#F44336"
          d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
        ></path>
        <g>
          <path
            fill="#1565C0"
            d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
          ></path>
          <path
            fill="#1565C0"
            d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
          ></path>
          <path
            fill="#1565C0"
            d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
          ></path>
          <path
            fill="#1565C0"
            d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
          ></path>
          <path
            fill="#1565C0"
            d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
          ></path>
        </g>
      </svg>
    ),
    name: "Java",
  },
  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
        <path
          fill="#000001"
          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
        ></path>
      </svg>
    ),
    name: "JavaScript",
  },
  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#7cb342"
          d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"
        ></path>
        <path
          fill="#7cb342"
          d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"
        ></path>
        <path
          fill="#7cb342"
          d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"
        ></path>
      </svg>
    ),
    name: "Android SDK",
  },
  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#80deea"
          d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
        ></path>
        <path
          fill="#80deea"
          d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
        ></path>
        <path
          fill="#80deea"
          d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
        ></path>
        <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
      </svg>
    ),
    name: "React",
  },
  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#212121"
          d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
        ></path>
      </svg>
    ),
    name: "Next.js",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#37474f"
          fill-rule="evenodd"
          d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#546e7a"
          fill-rule="evenodd"
          d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#455a64"
          fill-rule="evenodd"
          d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M34 20H35V28H34zM37 20H38V28H37z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M32 25H40V26H32zM32 22H40V23H32z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    name: "C-Sharp",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#00549d"
          fill-rule="evenodd"
          d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#0086d4"
          fill-rule="evenodd"
          d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#0075c0"
          fill-rule="evenodd"
          d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M31 21H33V27H31zM38 21H40V27H38z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M29 23H35V25H29zM36 23H42V25H36z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    name: "C Plus Plus",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path
          fill="#FFF"
          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
        ></path>
        <path
          fill="#EEE"
          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
        ></path>
      </svg>
    ),
    name: "HTML",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path
          fill="#FFF"
          d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
        ></path>
        <path
          fill="#EEE"
          d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
        ></path>
      </svg>
    ),
    name: "CSS",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#00acc1"
          d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
        ></path>
      </svg>
    ),

    name: "Tailwind CSS",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#673ab7"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
        ></path>
        <path
          fill="#fff"
          d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"
        ></path>
      </svg>
    ),
    name: "Bootstrap",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="70"
        height="70"
        viewBox="0 0 48 48"
      >
        <path
          fill="#388e3c"
          d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
        ></path>
        <path
          fill="#37474f"
          d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
        ></path>
        <path
          fill="#2e7d32"
          d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
        ></path>
        <path
          fill="#4caf50"
          d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
        ></path>
        <path
          fill="#37474f"
          d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
        ></path>
      </svg>
    ),
    name: "Node.js",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#ff8f00"
          d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
        ></path>
        <path
          fill="#ffa000"
          d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
        ></path>
        <path
          fill="#ff6f00"
          d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
        ></path>
        <path
          fill="#ffc400"
          d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
        ></path>
      </svg>
    ),
    name: "Firebase",
  },

  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#cfd8dc"
          d="M23.084,11.277c-1.633-2.449-1.986-5.722-2.063-7.067c-4.148,0.897-8.269,2.506-8.031,3.691 c0.03,0.149,0.218,0.328,0.53,0.502l-0.488,0.873c-0.596-0.334-0.931-0.719-1.022-1.179c-0.269-1.341,1.25-2.554,4.642-3.709 c2.316-0.789,4.652-1.26,4.751-1.279l0.597-0.12L22,3.6c0,0.042,0.026,4.288,1.916,7.123L23.084,11.277z"
        ></path>
        <path
          fill="#cfd8dc"
          d="M24.751,43H24.5c-8.192,0-17.309-2.573-18.386-6.879c-0.657-2.63,1.492-5.536,6.214-8.401 l0.52,0.854c-4.249,2.579-6.296,5.172-5.763,7.305c0.935,3.738,9.575,6.068,17.153,6.12c0.901-1.347,5.742-9.26,2.979-19.873 l0.967-0.252c3.149,12.092-3.218,20.837-3.282,20.924L24.751,43z"
        ></path>
        <path
          fill="#cfd8dc"
          d="M9.931,39.306c-0.539,0-0.806-0.059-0.85-0.07c-0.176-0.043-0.314-0.178-0.362-0.352 c-0.049-0.174,0.001-0.361,0.129-0.488c0.072-0.072,7.197-7.208,8.159-12.978l0.986,0.164c-0.827,4.964-5.715,10.623-7.656,12.707 c1.939-0.111,6.835-1.019,16.234-6.28c-7.335-0.804-8.495-6.676-8.507-6.739l0.983-0.181c0.047,0.246,1.226,6.011,9.244,6.011 c0.003,0,0.005,0,0.008,0l0,0c0.227,0,0.424,0.152,0.482,0.37c0.06,0.218-0.036,0.449-0.231,0.563 C17.315,38.542,11.867,39.305,9.931,39.306z"
        ></path>
        <path
          fill="#cfd8dc"
          d="M14.524,41.7c-0.207,0-0.395-0.128-0.468-0.325c-0.079-0.211-0.007-0.45,0.177-0.582 c0.034-0.025,1.813-1.338,3.706-4.228c-0.728-0.322-1.465-0.698-2.196-1.137c-0.888-0.533-1.559-1.105-2.06-1.691 c-2.57,0.678-4.942,0.946-7.025,0.769l0.084-0.996c1.876,0.159,4.009-0.063,6.321-0.64c-1.573-2.688-0.129-5.356-0.109-5.392 l0.874,0.487c-0.067,0.122-1.265,2.37,0.249,4.633c2.201-0.632,4.549-1.567,6.979-2.782c0.559-1.835,0.996-3.922,1.225-6.276 c0.016-0.161,0.108-0.304,0.248-0.385s0.311-0.088,0.458-0.021c0.032,0.015,3.264,1.491,5.604,2.454 c0.17,0.07,0.288,0.228,0.307,0.411c0.02,0.183-0.063,0.361-0.216,0.465c-2.289,1.56-4.563,2.913-6.778,4.042 c-0.702,2.225-1.571,4.077-2.459,5.591c3.702,1.383,6.915,1.404,6.956,1.404c0.228,0,0.427,0.154,0.484,0.375 c0.057,0.221-0.042,0.452-0.241,0.563c-4.54,2.522-11.767,3.232-12.072,3.261C14.556,41.699,14.54,41.7,14.524,41.7z M18.909,36.967c-1.04,1.614-2.062,2.773-2.826,3.53c1.998-0.294,5.501-0.938,8.408-2.139 C23.099,38.187,21.084,37.807,18.909,36.967z M14.767,33.431c0.393,0.392,0.883,0.775,1.49,1.14 c0.736,0.442,1.483,0.817,2.22,1.135c0.754-1.264,1.501-2.781,2.142-4.568C18.598,32.1,16.636,32.868,14.767,33.431z M23.202,24.329c-0.205,1.768-0.521,3.381-0.913,4.85c1.66-0.885,3.354-1.896,5.062-3.026 C25.802,25.497,24.099,24.734,23.202,24.329z"
        ></path>
        <path
          fill="#cfd8dc"
          d="M17.924,10.6c-0.117,0-0.233-0.042-0.325-0.12c-1.61-1.378-3.505-4.182-3.585-4.301 c-0.129-0.191-0.109-0.446,0.046-0.616c0.154-0.171,0.408-0.211,0.608-0.102c0.011,0.003,0.938,0.385,7.217,1.431 c0.181,0.03,0.33,0.156,0.39,0.328c0.061,0.172,0.022,0.364-0.1,0.5c-1.758,1.953-3.979,2.813-4.073,2.848 C18.044,10.589,17.983,10.6,17.924,10.6z M15.647,6.746c0.631,0.849,1.54,1.996,2.372,2.769c0.511-0.233,1.657-0.818,2.744-1.798 C18.18,7.276,16.604,6.962,15.647,6.746z"
        ></path>
        <path
          fill="#b71c1c"
          d="M21.843,24.4c-0.068,0-0.137-0.014-0.201-0.042c-0.199-0.088-0.319-0.294-0.296-0.51 c0.292-2.749-3.926-3.852-3.969-3.862c-0.174-0.044-0.312-0.179-0.359-0.352s0.002-0.359,0.129-0.486 c0.207-0.207,5.139-5.098,11.327-7.784c0.173-0.075,0.369-0.047,0.515,0.07c0.145,0.118,0.212,0.307,0.174,0.489 c-1.186,5.744-6.71,12.044-6.944,12.309C22.12,24.341,21.982,24.4,21.843,24.4z M18.455,19.285 c1.184,0.445,3.258,1.475,3.783,3.356c1.449-1.808,4.542-5.973,5.697-9.934C23.548,14.817,19.854,17.999,18.455,19.285z"
        ></path>
        <path
          fill="#b71c1c"
          d="M13.079,28.36l-0.475-0.88c1.883-1.015,4.04-2.883,5.807-5.054c-1.504,1.03-2.365,1.735-2.392,1.758 l-0.639-0.77c0.039-0.032,1.764-1.447,4.631-3.22c0.787-1.266,1.392-2.568,1.703-3.816c0.053-0.212,0.099-0.417,0.136-0.615 c-1.925-0.687-3.701-1.094-4.921-1.269c-0.185-0.026-0.339-0.153-0.401-0.328c-0.062-0.175-0.021-0.371,0.104-0.507 c0.085-0.092,2.116-2.268,4.654-3.463c0.197-0.093,0.433-0.047,0.581,0.114c0.067,0.073,1.44,1.615,1.091,4.805 c1.155,0.45,2.345,0.997,3.491,1.648c2.759-1.24,5.892-2.356,9.229-3.03c0.172-0.034,0.363,0.028,0.481,0.168 c0.117,0.14,0.149,0.333,0.083,0.503c-1.3,3.332-4.786,6.891-4.934,7.041c-0.101,0.102-0.239,0.153-0.383,0.148 c-0.143-0.008-0.275-0.076-0.365-0.188c-1.12-1.408-2.584-2.574-4.163-3.523c-2.175,1.004-4.101,2.078-5.684,3.049 C18.693,24.084,15.644,26.979,13.079,28.36z M27.492,17.396c1.29,0.832,2.491,1.81,3.484,2.948 c0.828-0.898,2.815-3.168,3.942-5.422C32.268,15.532,29.76,16.415,27.492,17.396z M22.799,16.122 c-0.033,0.163-0.071,0.33-0.113,0.5c-0.21,0.839-0.544,1.701-0.972,2.561c1.096-0.626,2.309-1.272,3.618-1.898 C24.494,16.841,23.639,16.455,22.799,16.122z M18.048,13.672c1.111,0.218,2.48,0.574,3.941,1.086 c0.152-1.843-0.346-2.972-0.647-3.472C19.966,12.004,18.761,13.014,18.048,13.672z"
        ></path>
        <path
          fill="#b71c1c"
          d="M18.05,18.5c0,4.38-3.65,7.86-6.28,10.4c-0.44,0.43-1.93,0.5-1.93,0.5 c0.37-0.38,0.79-0.78,1.24-1.21c2.5-2.42,5.97-5.73,5.97-9.69c0-4.69-1.89-6.54-3.38-8.02c-0.66-0.67-1.22-1.31-1.56-2.09 l0.31-0.13c0.34,0.15,0.73,0.32,1.03,0.45c0.24,0.35,0.56,0.69,0.93,1.06C15.91,11.3,18.05,13.4,18.05,18.5z"
        ></path>
        <path
          fill="#b71c1c"
          d="M42.935,19.794c0,0-0.605,0.086-0.775,0.106c-8.76,0.97-17.8,3.49-22.97,5.56 c-1.87,0.75-3.81,1.66-5.58,2.68c-0.01,0.01-0.02,0.01-0.04,0.02C12.53,28.76,10,30,7.95,31.09c3-3.19,8.62-5.65,10.86-6.55 c5.07-2.03,13.78-4.48,22.35-5.53c-1.01-1.18-3.48-3.68-8.34-5.54c-2.84-1.1-7.16-1.72-10.97-2.27c-6.06-0.87-9.51-1.45-9.84-3.1 c-0.07-0.33-0.02-0.66,0.13-0.98c0.33,0.54,0.8,0.92,1.11,1.14c0.15,0.1,0.26,0.16,0.3,0.18l0.01,0.01 c1.42,0.75,5.25,1.3,8.44,1.76c3.86,0.56,8.23,1.19,11.18,2.32c6.87,2.65,9.24,6.44,9.34,6.6 C42.61,19.28,42.935,19.794,42.935,19.794z"
        ></path>
      </svg>
    ),
    name: "MS SQL Server",
  },
  {
    icon: (
      <svg
        class="h-12"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#5d4037"
          d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
        ></path>
        <path
          fill="#4caf50"
          d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
        ></path>
        <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
        <path
          fill="#4caf50"
          d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
        ></path>
        <path
          fill="#81c784"
          d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
        ></path>
      </svg>
    ),
    name: "MongoDB",
  },
];
