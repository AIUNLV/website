export type Member = {
  name: string;
  role: string;
  link?: string;
  src?: string;
};

export type Team = {
  name: string;
  members: Member[];
};

const admins: Member[] = [
  {
    name: "Athanasios Tassiadamis",
    role: "President",
    link: "https://www.linkedin.com/in/athanasios-t-8a17b4294",
    src: "/members/athanasios_tassiadamis.jpg",
  },
  {
    name: "Faris Atout",
    role: "Vice President",
    link: "https://www.linkedin.com/in/farisatout/",
    src: "/members/faris_atout.png",
  },
  {
    name: "Micaela Benavidez-Sosa",
    role: "Treasurer & Secretary",
    link: "https://www.linkedin.com/in/athanasios-t-8a17b4294",
    src: "/AIDataScience_Image.jpg",
  },
];

const development: Member[] = [
  {
    name: "Daniel Mamuza",
    role: "Project Coordinator",
    link: "https://danielmamuza.com",
    src: "/members/daniel_mamuza.jpg",
  },
  {
    name: "Teddy Lieber",
    role: "Officer",
    link: "https://www.linkedin.com/in/teddy-lieber-13bb16211/",
    src: "/members/teddy_lieber.jpg",
  },
  {
    name: "Ziad Alharbi",
    role: "tbd",
    link: "https://www.linkedin.com/in/athanasios-t-8a17b4294",
    src: "/AIDataScience_Image.jpg",
  },
  {
    name: "Sebastion Yepez",
    role: "tbd",
    link: "sebastianyepez.github.io",
    src: "/members/sebastian_yepez.jpg",
  },
  {
    name: "John Kim",
    role: "tbd",
    link: "https://www.linkedin.com/in/john-kim-profile/",
    src: "/members/john_kim.jpg",
  },
];

const volunteering: Member[] = [
  {
    name: "Kaysan",
    role: "tbd",
    link: "https://www.linkedin.com/in/athanasios-t-8a17b4294",
    src: "/AIDataScience_Image.jpg",
  },
  {
    name: "Dayanara Reyna",
    role: "Member Development",
    link: "www.linkedin.com/in/dayanara-reyna",
    src: "/members/dayanara_reyna.jpg",
  },
];

const outreach: Member[] = [
  {
    name: "Garrett Prentice",
    role: "Campus Coordinator",
    link: "https://www.linkedin.com/in/garrettprentice/",
    src: "/members/garrett_prentice.jpg",
  },
  {
    name: "Daniel Gladstein",
    role: "Outreach Officer",
    link: "www.linkedin.com/in/daniel-gladstein-1b1ba0207",
    src: "/members/daniel_gladstein.jpg",
  },
  {
    name: "Narek 'Tony' Tonoyan",
    role: "Member-Development",
    link: "https://www.linkedin.com/in/athanasios-t-8a17b4294",
    src: "/AIDataScience_Image.jpg",
  },
  {
    name: "Steven Liang",
    role: "Social Media Manager",
    link: "http://linkedin.com/in/steven-liang0000",
    src: "members/steven_liang.jpg",
  },
];

export const teams: Team[] = [
  {
    name: "Adminstrative",
    members: admins,
  },
  {
    name: "Outreach",
    members: outreach,
  },
  {
    name: "Volunteering",
    members: volunteering,
  },
  {
    name: "Development",
    members: development,
  },
];