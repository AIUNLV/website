import { FaBrain, FaCode, FaGlobe, FaRobot, FaSpinner } from "react-icons/fa6";

export type Project = {
  title: string;
  text: string;
  src?: string;
  icon?: JSX.Element;
};

export const projects: Project[] = [
  {
    title: "Discord Bot",
    text: "Description needed",
    icon: <FaRobot className="text-white md:h-10 md:w-10 h-5 w-5" />,
  },
  {
    title: "Neural Network",
    text: "Description needed",
    icon: <FaBrain className="text-white md:h-10 md:w-10 h-5 w-5" />,
  },
  {
    title: "Website",
    text: "Description needed",
    icon: <FaGlobe className="text-white md:h-10 md:w-10 h-5 w-5" />,
  },
  {
    title: "Project 3",
    text: "Description needed",
    icon: <FaSpinner className="text-white md:h-10 md:w-10 h-5 w-5 animate-none group-hover:animate-spin" />,
  },
];