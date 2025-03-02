export type Project = {
  title: string;
  text: string;
  icon: string;
  goal?: string;
  dataset?: string;
  current?: boolean;
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
  },
  {
    title: "Brain Tumor Detection",
    text: "Creating Convolutional Neural Networks for detecting brain tumors in MRI imaging.",
    icon: "FaBrain",
    goal: "Achieve at least 90% accuracy with no false negatives.",
    dataset: "https://www.kaggle.com/datasets/ultralytics/brain-tumor/data",
    current: true,
  },
  {
    title: "'Skald' - Discord Bot",
    text: "Our very own Discord Bot developed by Teddy Lieber that helps out on our server.",
    icon: "FaRobot",
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
    text: "The current website you're on, built with React on the front end and Flask for the backend.",
    icon: "FaGlobe",
  },
];

export default projects;
