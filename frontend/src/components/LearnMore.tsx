const LearnMore = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly items-center py-16 px-12 md:px-36 gap-36 bg-gradient-to-t from-white to-gray-200">
      <div className="max-w-lg space-y-8 items-start">
        <h1 className="leading-4 font-light text-3xl text-primary">Discover</h1>
        <h2 className="leading-8 font-bold text-4xl max-w-sm">
          What is AI & Data Science all about?
        </h2>
        <div className="flex items-center">
          <div className="bg-primary w-3 h-44 mx-2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <button
          className="rounded-lg p-4 block text-white w-36 transition-all duration-500
        bg-gradient-to-tl from-primary via-red-600 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Learn More
        </button>
      </div>
      <div className="flex">
        <img
          src="/AIDataScience_Image.jpg"
          alt="filler"
          className="rounded-full w-full h-auto max-w-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default LearnMore;
