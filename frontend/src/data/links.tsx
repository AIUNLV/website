import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";


export const links = [
  { name: "Projects", href: "/projects" },
  { name: "Log In", href: "/login" },
  { name: "Sign Up", href: "/signup" },
  {
    name: "Involvement Center",
    href: "https://involvementcenter.unlv.edu/organization/aidatascience",
  },
];

export const socials = [
  { href: "/discord", icon: <FaDiscord />, alt: "Discord" },
  { href: "https://github.com/AIUNLV", icon: <FaGithub />, alt: "GitHub" },
  {
    href: "https://www.linkedin.com/company/ai-and-data-science-club/",
    icon: <FaLinkedin />,
    alt: "LinkedIn",
  },
];
