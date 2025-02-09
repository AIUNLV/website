import {
  FaBrain,
  FaGlobe,
  FaPython,
  FaRobot,
  FaSpinner,
} from "react-icons/fa6";

export type Project = {
  title: string;
  text: string;
  src?: string;
  icon?: JSX.Element;
};

export const projects: Project[] = [
  {
    title: "'Skald' - Discord Bot",
    text: "Our very own Discord Bot developed by Teddy Lieber that helps out on our server.",
    icon: (
      <FaRobot className="text-white md:h-10 md:w-10 h-5 w-5 animate-none group-hover:animate-bounce delay-200" />
    ),
  },
  {
    title: "Machine Learning Model",
    text: "Collaborative projects developed by members as part of CS 422, exploring real-world machine learning applications.",
    icon: (
      <FaBrain className="text-white md:h-10 md:w-10 h-5 w-5 transition-none group-hover:animate-bounce delay-200" />
    ),
  },
  {
    title: "Club Website",
    text: "The current website you're on, built with React on the front end and Flask for the backend.",
    icon: (
      <FaGlobe className="text-white md:h-10 md:w-10 h-5 w-5 transition-none group-hover:animate-bounce delay-200" />
    ),
  },
  // {
  //   title: "Project 3",
  //   text: "Description needed",
  //   icon: (
  //     <FaSpinner className="text-white md:h-10 md:w-10 h-5 w-5 animate-none group-hover:animate-spin" />
  //   ),
  // },
];

