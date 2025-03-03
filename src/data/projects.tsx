type Member = {
  name: string;
  href?: string;
};

export type Project = {
  title: string;
  text: string;
  icon: string;
  goal?: string;
  dataset?: string;
  current?: boolean;
  members?: Member[];
};

export const projects: Project[] = [
  {
    title: "Military Aircraft Detection",
    text: "Developing a real-time detection system for military aircraft using advanced computer vision techniques.",
    icon: "FaJetFighter",
    goal: "Achieve high-precision identification of military aircraft with minimal false positives.",
    dataset:
      "https://www.kaggle.com/datasets/a2015003713/militaryaircraftdetectiondataset",
    current: true,
    members: [
      {
        name: "Athanasios Tassiadamis",
        href: "https://www.linkedin.com/in/athanasios-t-8a17b4294",
      },
      {
        name: "Jadon Whiley",
        href: "https://www.linkedin.com/in/jaden-whiley-595061311/",
      },
      {
        name: "Manjot Sandhu",
        href: "https://www.linkedin.com/in/manjot-sandhu-b4a842290/",
      },
    ],
  },
  {
    title: "Brain Tumor Detection",
    text: "Creating Convolutional Neural Networks for detecting brain tumors in MRI imaging.",
    icon: "FaBrain",
    goal: "Achieve at least 90% accuracy with no false negatives.",
    dataset: "https://www.kaggle.com/datasets/ultralytics/brain-tumor/data",
    current: true,
    members: [
      {
        name: "Teddy Lieber",
        href: "https://www.linkedin.com/in/theodore-lieber-13bb16211/",
      },
    ],
  },
  {
    title: "'Skald' - Discord Bot",
    text: "Our very own Discord Bot with its own badge, attendance, and quest system.",
    icon: "FaRobot",
    current: true,
    members: [
      {
        name: "Teddy Lieber",
        href: "https://www.linkedin.com/in/theodore-lieber-13bb16211/",
      },
    ],
  },
  // {
  //   title: "Machine Learning Model",
  //   text: "Collaborative projects developed by members as part of CS 422, exploring real-world machine learning applications.",
  //   icon: (
  //     <FaBrain className="text-white md:h-10 md:w-10 h-5 w-5 transition-none group-hover:animate-bounce delay-200" />
  //   ),
  // },
  {
    title: "Club Website",
    text: "The current website you're on, built with React, Tailwind CSS, and Vite.",
    icon: "FaGlobe",
    current: true,
    members: [
      {
        name: "Daniel Mamuza",
        href: "https://danielmamuza.com",
      },
    ],
  },
];

export default projects;
