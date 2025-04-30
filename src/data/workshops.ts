export type Workshop = {
  heading: string;
  subheading: string;
  href: string;
  img?: string;
};

export const workshops: Workshop[] = [
  {
    heading: "Making & Breaking AI Agents",
    subheading: "Learn how to build, break, and use AI agents",
    href: "https://sebastianyepez.com/projects/ai_workshops/#/workshop3",
    img: "/workshops/agents.jpg",
  },
  {
    heading: "VS Code + Jupyter Integration",
    subheading: "Discover how to setup Python & Jupyter Notebooks in VSCode",
    href: "https://sebastianyepez.github.io/Project_Webpages/ai_workshops/#/workshop1",
  },
];

export default workshops;
