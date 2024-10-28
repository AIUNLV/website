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
  }).format(date);

export const formatTime = (time: Date): string =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(time);

export const events: Event[] = [
  {
    title: "Python Workshop",
    room: "SU 208A",
    date: new Date("2024-11-25"),
    startTime: new Date("2024-11-25T17:30:00"),
    endTime: new Date("2024-11-25T20:30:00"),
    text: `Join us for a hands-on Python workshop where you can learn essential coding 
    skills, regardless of your experience level. Collaborate with peers and enhance your
     programming knowledge through practical exercises and real-world applications!`,
  },
  {
    title: "Club Introduction",
    date: new Date("2024-09-16"),
    text: "We held our first meeting, bringing together eager members to explore AI and data science through collaboration and shared learning.",
    src: "/events/first-meeting.jpg",
    alt: "First Meeting Photo",
  },
];
