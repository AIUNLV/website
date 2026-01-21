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
    name: "Teddy Lieber",
    role: "President",
    link: "https://www.linkedin.com/in/theodore-lieber-13bb16211/",
    src: "/members/teddy_lieber.jpeg",
  },
  {
    name: "Sebastian Yepez",
    role: "Vice President",
    link: "https://sebastianyepez.github.io",
    src: "/members/sebastian_yepez.webp",
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
];

const outreach: Member[] = [
  {
    name: "Milaan Shah",
    role: "Officer",
    link: "https://www.linkedin.com/in/milaan-shah-47248731b/",
    src: "/members/milaan_shah.png",
  },
  {
    name: "Vanshdeep 'Vansh' Sehrawat",
    role: "Officer",
    link: "https://www.linkedin.com/in/vanshdeep-sehrawat-50603327a/",
    src: "/AIDataScience_Image.jpg",
  },
  {
    name: "Krystka Mariano",
    role: "Public Relations",
    link: "https://www.linkedin.com/in/krystka-mariano/",
    src: "/members/krystka_mariano.webp",
  },
  // {
  //   name: "Ziad Alharbi",
  //   role: "Outreach Offier",
  //   link: "",
  //   src: "/AIDataScience_Image.jpg",
  // },
];

const members_development: Member[] = [
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
