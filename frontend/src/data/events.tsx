export type Event = {
  title: string;
  room?: string;

  startTime?: Date;
  endTime?: Date;
  date?: Date;

  text: string;

  src?: string;
  alt?: string;
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
    timeZone: "UTC",
  }).format(time);

export const events: Event[] = [
  {
    title: "Dr. Black's Presentation on Machine Learning",
    room: "CHB C316",
    date: new Date("2024-11-25"),
    startTime: new Date("2024-11-25T17:30:00"),
    endTime: new Date("2024-11-25T20:30:00"),
    text: `Dr. Samuel Black gave us our very first guest speaker presentation. The 
    presentation discussed topics at a high level such as machine learning, neural networks, and functional layers.`,
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
