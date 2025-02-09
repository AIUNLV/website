import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";

export const links = [
  { name: "Gallery", href: "/gallery", alt: "Club Gallery" },
  // { name: "Log In", href: "/login" },
  // { name: "Sign Up", href: "/signup" },
  {
    name: "Involvement Center",
    href: "https://involvementcenter.unlv.edu/organization/aidatascience",
    alt: "Involvement Center",
  },
];

export const socials = [
  {
    href: "https://discord.gg/UEVdYp6UGR",
    icon: <FaDiscord />,
    alt: "Discord",
  },
  { href: "https://github.com/AIUNLV", icon: <FaGithub />, alt: "GitHub" },
  {
    href: "https://www.linkedin.com/company/ai-and-data-science-club/",
    icon: <FaLinkedin />,
    alt: "LinkedIn",
  },
];
