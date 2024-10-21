const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-20 py-24 bg-[#B71F31]">
      <img
        className="w-64 h-64 object-cover rounded-full p-4 bg-[#F1E9DE]"
        src="/AIDataScience_Image.jpg"
        alt="AI & Data Science Club Logo"
      />
      <div className="max-w-sm p-4">
        <h1 className="text-5xl font-bold text-white">
          AI & Data Science Club
        </h1>
        <p className="text-lg text-gray-200">at UNLV</p>
      </div>
    </div>
  );
};

export default Hero;
