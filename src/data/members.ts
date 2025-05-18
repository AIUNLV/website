export type Member = {
  name: string;
  role: string;
  link?: string;
  src?: string;
};

export type Team = {
  id: string; // for aos
  name: string;
  members: Member[];
};

const admins: Member[] = [
  {
    name: "Athanasios Tassiadamis",
    role: "President",
    link: "https://atassiad.github.io/",
    src: "/members/athanasios_tassiadamis.webp",
  },
  {
    name: "Faris Atout",
    role: "Vice President",
    link: "https://www.linkedin.com/in/farisatout/",
    src: "/members/faris_atout.webp",
  },
  {
    name: "Micaela Benavidez-Sosa",
    role: "Treasurer & Secretary",
    link: "",
    src: "/AIDataScience_Image.jpg",
  },
];

const development: Member[] = [
  {
    name: "Daniel Mamuza",
    role: "Webmaster",
    link: "https://danielmamuza.com",
    src: "/members/daniel_mamuza.webp",
  },
  {
    name: "Teddy Lieber",
    role: "Officer",
    link: "https://www.linkedin.com/in/theodore-lieber-13bb16211/",
    src: "/members/teddy_lieber.webp",
  },
  {
    name: "John Kim",
    role: "Officer",
    link: "https://www.linkedin.com/in/john-kim-profile/",
    src: "/members/john_kim.webp",
  },
];

const outreach: Member[] = [
  {
    name: "Krystka Mariano",
    role: "Public Relations",
    link: "https://www.linkedin.com/in/krystka-mariano/",
    src: "/members/krystka_mariano.webp",
  },
  {
    name: "Daniel Gladstein",
    role: "Outreach Officer",
    link: "https://www.linkedin.com/in/daniel-gladstein-1b1ba0207",
    src: "/members/daniel_gladstein.webp",
  },
  {
    name: "Ziad Alharbi",
    role: "Outreach Offier",
    link: "",
    src: "/AIDataScience_Image.jpg",
  },
];

const members_development: Member[] = [
  {
    name: "Sebastian Yepez",
    role: "Workshop Officer",
    link: "https://sebastianyepez.github.io",
    src: "/members/sebastian_yepez.webp",
  },
  {
    name: "Narek 'Tony' Tonoyan",
    role: "Member Development",
    link: "https://www.linkedin.com/in/narek-tonoyan-ba9838326/",
    src: "/members/tony_tonoyan.webp",
  },
  {
    name: "Kaysan Wade",
    role: "Volunteering Officer",
    link: "",
    src: "/AIDataScience_Image.jpg",
  },
];

// exporting to team component
export const teams: Team[] = [
  {
    id: "admin",
    name: "Administrative",
    members: admins,
  },
  {
    id: "outreach",
    name: "Outreach",
    members: outreach,
  },
  {
    id: "workshops",
    name: "Member-Development & Workshops",
    members: members_development,
  },
  {
    id: "development",
    name: "Development",
    members: development,
  },
];
