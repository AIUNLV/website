const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between w-full h-20 px-10 bg-secondary shadow-xl rounded-b-3xl">
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
      <a
        className="inline-block px-8 py-2 bg-primary rounded-xl hover:drop-shadow-md text-white
        transition-all duration-500 bg-gradient-to-tl from-primary via-red-600 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100"
        href="https://involvementcenter.unlv.edu/organization/aidatascience"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join us!
      </a>
    </nav>
  );
};

export default Navbar;
