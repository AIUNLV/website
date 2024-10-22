const Hero = () => {
  return (
    <main className="flex md:flex-row flex-col-reverse items-center justify-center md:gap-20 gap-8 pt-40 py-24 bg-gradient-to-b from-white to-gray-200 border-b-8">
      <div className="md:max-w-xl mx-28 md:mx-20 space-y-8">
        <h1 className="md:text-6xl text-3xl font-extrabold tracking-tighter">
          Innovating AI and Data Science at{" "}
          <span className="bg-gradient-to-t from-primary to-red-500 inline-block text-transparent bg-clip-text">
            UNLV
          </span>
        </h1>
        <h2 className="text-xl text-gray-700 font-light">
          Explore cutting-edge technologies and collaborate with like-minded
          students at UNLV,
        </h2>
        <div className="flex gap-2">
          <a
            className="inline-block px-8 py-2 text-sm md:text-base rounded-xl text-white 
            transition-all duration-500 bg-gradient-to-l from-primary via-red-600 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100"
            href="https://involvementcenter.unlv.edu/organization/aidatascience"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our community
          </a>
          <a
            className="inline-block px-8 py-2 border text-sm md:text-base border-black rounded-xl transition filter text-black
            hover:shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),_0px_30px_60px_-30px_rgba(0,0,0,0.3),_inset_0px_-2px_6px_0px_rgba(10,37,64,0.35)]"
            href="/signin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in
          </a>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col -space-y-2">
            <span className="font-bold text-lg tracking-tight">190</span>
            <span>members</span>
          </div>
          <div className="bg-primary w-[2px] h-auto mx-2" />
          <div className="flex flex-col -space-y-2">
            <span className="font-bold text-lg tracking-tight">3</span>
            <span>projects</span>
          </div>
          <div className="bg-primary w-[2px] h-auto mx-2" />
          <div className="flex flex-col -space-y-2">
            <span className="font-bold text-lg tracking-tight">10</span>
            <span>workshops</span>
          </div>
        </div>
      </div>
      <img
        className="w-48 h-48 md:h-64 md:w-64 xl:h-80 xl:w-80 object-cover rounded-full p-4 bg-secondary"
        src="/AIDataScience_Image.jpg"
        alt="AI & Data Science Club Logo"
      />
    </main>
  );
};

export default Hero;
