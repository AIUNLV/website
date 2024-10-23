import { socials } from "../data/links";

const Navbar = () => {
  return (
    <nav
      className="fixed flex items-center justify-between w-full h-20 md:px-10 px-5 bg-secondary/50 backdrop-blur-md shadow-xl rounded-b-3xl z-50"
      data-aos="fade-down"
      data-aos-duration="700"
    >
      <a
        className="flex items-center no-underline hover:scale-105 transform transition-transform duration-150"
        href="/"
      >
        <img
          className="w-16 h-16 rounded-full bg-secondary"
          src="/AIDataScience_Image.jpg"
          alt="AI & Data Science Club Logo"
        />
        <span className="ml-2 text-lg font-bold md:inline hidden">
          UNLV AI & Data Science Club
        </span>
      </a>
      <div className="flex flex-row items-center justify-center gap-2">
        <ul className="items-center gap-6 mr-4 md:flex hidden">
          {socials.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                className="flex items-center justify-center rounded-full text-primary hover:text-primary/80 transition-colors duration-300"
                aria-label={social.alt}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          className="inline-block px-8 py-2 bg-primary rounded-xl hover:drop-shadow-md text-white
        transition-all duration-500 bg-gradient-to-tl from-primary via-red-600 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100"
          href="https://involvementcenter.unlv.edu/organization/aidatascience"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join us!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
