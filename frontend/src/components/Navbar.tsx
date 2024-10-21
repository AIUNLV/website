const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between w-full h-20 px-8 bg-[#F1E9DE] shadow-md">
      <a
        className="flex items-center text-black no-underline hover:scale-105 transform transition-transform duration-150"
        href="/"
      >
        <img
          className="w-16 h-16 rounded-full bg-[#F1E9DE]"
          src="/AIDataScience_Image.jpg"
          alt="AI & Data Science Club Logo"
        />
        <span className="ml-2 text-lg font-bold">
          UNLV AI & Data Science Club
        </span>
      </a>
      <a
        className="inline-block px-4 py-2 text-black bg-[#F1E9DE] border border-[#D4C2B3] rounded transition filter hover:drop-shadow-md"
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
