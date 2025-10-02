export type Event = {
  title: string;
  room?: string;

  startTime?: Date;
  endTime?: Date;
  date?: Date;

  text: string;

  src?: string;
  alt?: string;
  link?: {
    text: string;
    url: string;
  };
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

export const formatTime = (time: Date): string =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(time);

// TODO :: please make into db and remove this lol
export const events: Event[] = [
  {
    title: "(Machine) Learning about the Universe with Dr. La Plante",
    room: "AEB 150",
    date: new Date("2025-10-15"),
    startTime: new Date("2025-10-15T17:30:00"),
    endTime: new Date("2025-10-15T19:30:00"),
    text: `During Cosmic Dawn, nearly 13 billion years ago, the first generation of stars and galaxies in our Universe formed. While recent observations from telescopes like the James Webb Space Telescope have provided fascinating data, direct observations of Cosmic Dawn remain elusive. In this talk, I will discuss how we can observe Cosmic Dawn without looking at these galaxies directly, and how we can use machine learning techniques to detect faint echoes from these early times. By combining data from multiple telescopes together, we may be able to form a more comprehensive view of the Universe and build confidence in our ability to measure this exciting era of the Universe's history.`,
    // src: "/events/10-15-25.webp",
    // alt: "Dr. La Plante's Presentation Poster",
  },
  {
    title: "Efficient and Accurate computer Vision with ViT with Dr. Black",
    room: "AEB 150",
    date: new Date("2025-10-01"),
    startTime: new Date("2025-10-01T17:30:00"),
    endTime: new Date("2025-10-01T19:30:00"),
    text: ``,
    src: "events/10-01-25.webp",
    alt: "Dr. Black poster",
  },
  {
    title: "DS and ML in the Casino, Austin Moss from Gaming Analytics",
    room: "AEB 150",
    date: new Date("2025-10-08"),
    startTime: new Date("2025-10-08T17:30:00"),
    endTime: new Date("2025-10-08T19:30:00"),
    text: ``,
    src: "",
    alt: "",
  },
  {
    title: "GPUs and You, a Hardware Workshop",
    room: "AEB 150",
    date: new Date("2025-10-29"),
    startTime: new Date("2025-10-29T17:30:00"),
    endTime: new Date("2025-10-29T19:30:00"),
    text: ``,
    src: "",
    alt: "",
  },
  {
    title: "Latest Developments in AI/ML",
    room: "AEB 150",
    date: new Date("2025-11-26"),
    startTime: new Date("2025-11-26T17:30:00"),
    endTime: new Date("2025-11-26T19:30:00"),
    text: ``,
    src: "",
    alt: "",
  },
  {
    title: "Sebastian Yepez's Deep Learning Project",
    room: "AEB 150",
    date: new Date("2025-11-19"),
    startTime: new Date("2025-11-19T17:30:00"),
    endTime: new Date("2025-11-19T19:30:00"),
    text: ``,
    src: "",
    alt: "",
  },
  {
    title: "Lab-Grown Brains and Computation",
    room: "AEB 150",
    date: new Date("2025-11-12"),
    startTime: new Date("2025-11-12T17:30:00"),
    endTime: new Date("2025-11-12T19:30:00"),
    text: ``,
    src: "",
    alt: "",
  },
  {
    title: "AI Extinction: Sci-Fi or Imminent Threat?",
    room: "AEB 150",
    date: new Date("2025-11-05"),
    startTime: new Date("2025-11-05T17:30:00"),
    endTime: new Date("2025-11-05T19:30:00"),
    text: ``,
    src: "",
    alt: "",
  },
  {
    title: "Gradients & Loss Functions",
    room: "AEB 150",
    date: new Date("2025-10-22"),
    startTime: new Date("2025-10-22T17:30:00"),
    endTime: new Date("2025-10-22T19:30:00"),
    text: ``,
    src: "",
    alt: "",
  },
  {
    title: "Fundamentals of DL/ML Mathematics",
    room: "AEB 150",
    date: new Date("2025-09-17"),
    startTime: new Date("2025-09-17T17:30:00"),
    endTime: new Date("2025-09-17T19:30:00"),
    text: `An introduction into the mathematics behind machine learning and deep learnign concepts.`,
    src: "/events/09-17-25.jpg",
    alt: "Thanos presenting",
  },
  {
    title: "Intro to Research",
    room: "AEB 150",
    date: new Date("2025-09-10"),
    startTime: new Date("2025-09-10T17:30:00"),
    endTime: new Date("2025-09-10T19:30:00"),
    text: `Come learn how to get started with research and explore opportunities in AI & Data Science!`,
    src: "/events/09-10-25.webp",
    alt: "Intro to Research Poster",
    link: {
      text: "Presentation",
      url: "https://docs.google.com/presentation/d/1aB3rFcO4bMk0Zjj74gPO8ycL93-wowqppY6sk6DCNA4",
    },
  },
  {
    title: "Making & Breaking AI Agents",
    room: "AEB 150",
    date: new Date("2025-04-23"),
    startTime: new Date("2025-04-23T17:30:00"),
    endTime: new Date("2025-04-23T19:30:00"),
    text: `We’ll be diving into how AI agents work—how to build them, how they fail, and how to safely and ethically break them on purpose.`,
    src: "/events/agents.jpg",
    alt: "The speakers for the Making & Breaking AI Agents event",
  },
  {
    title: "Victor Aldana's Presentation on AI",
    room: "Philip J. Cohen Theater",
    date: new Date("2025-01-27"),
    startTime: new Date("2025-01-27T17:30:00"),
    endTime: new Date("2025-01-27T20:30:00"),
    text: `Victor Aldana, a UNLV alumnus and Microsoft employee, shared insights on AI, common pitfalls, and tips for maximizing
     its potential during his guest talk for the AI & Data Science Club.`,
    src: "/events/aldana.jpg",
    alt: "Victor Aldana guest speaker AI presentation",
  },
  {
    title: "Dr. Black's Presentation on Machine Learning",
    room: "CHB C316",
    date: new Date("2024-11-26"),
    startTime: new Date("2024-11-26T17:30:00"),
    endTime: new Date("2024-11-26T20:30:00"),
    text: `Dr. Samuel Black gave us our very first guest speaker presentation. The 
    presentation discussed topics at a high level such as machine learning, neural networks, and functional layers.`,
    src: "/events/sam-black.jpg",
    alt: "Dr. Black neural network primer",
  },
  {
    title: "Python Workshop",
    room: "SU 208A",
    date: new Date("2024-11-25"),
    startTime: new Date("2024-11-25T17:30:00"),
    endTime: new Date("2024-11-25T20:30:00"),
    text: `Join us for a hands-on Python workshop where you can learn essential coding 
    skills, regardless of your experience level. Collaborate with peers and enhance your
     programming knowledge through practical exercises and real-world applications!`,
    src: "/events/python-workshop.png",
    alt: "Python Workshop Flyer",
  },
  {
    title: "Club Introduction",
    date: new Date("2024-09-16"),
    text: "We held our first meeting, bringing together eager members to explore AI and data science through collaboration and shared learning.",
    src: "/events/first-meeting.jpg",
    alt: "First Meeting Photo",
  },
];

export default events;
