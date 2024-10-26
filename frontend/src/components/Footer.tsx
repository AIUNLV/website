import { Link } from "react-router-dom";
import { links } from "../data/links";
import { texts } from "../data/texts";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-4 w-full mx-auto p-4 bg-secondary md:h-[15vh]">
      <a
        className="flex items-center no-underline hover:scale-110 transform transition-transform duration-150"
        href="/"
      >
        <img
          className="w-20 h-20 rounded-full"
          src="/AIDataScience_Image.jpg"
          alt="AI & Data Science Club Logo"
        />
      </a>
      <div className="md:text-left text-center">
        <h3 className="text-primary font-light text-lg">Links</h3>
        <ul className="flex flex-col">
          {links.map((link, index) => (
            <li key={index} className="text-sm">
              <Link
                className="group inline-block transition duration-300"
                to={link.href}
              >
                {link.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <span className="max-w-xs font-extralight md:text-left text-center">
        {texts.footer.text}
      </span>
    </footer>
  );
}

export default Footer;