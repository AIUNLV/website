import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { texts } from "../data/texts";

const LearnMore = () => {
  return (
    <div className="bg-gradient-to-t from-white to-gray-400 md:px-0 px-10">
      <div
        className="flex flex-col md:flex-row items-center justify-center
        gap-16 md:py-24 py-10 px-auto mx-auto max-w-screen-xl"
      >
        <div className="md:max-w-lg max-w-sm space-y-8 items-start md:ml-16">
          <h1 className="leading-4 font-extralight text-3xl text-primary">
            {texts.learnMore.title}
          </h1>
          <h2 className="leading-8 font-bold text-4xl max-w-sm">
            {texts.learnMore.subtitle}
          </h2>
          <div className="flex items-center">
            <div className="bg-primary w-3 md:h-44 h-[250px] mx-2" />{" "}
            {/* separator */}
            <p>{texts.learnMore.text}</p>
          </div>
          <Link
            className="flex items-center gap-3 rounded-lg p-4 text-white w-36 transition-all duration-500
        bg-gradient-to-tl from-primary via-red-600 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100"
            to="/projects"
          >
            {texts.learnMore.btn}{" "}
            <FaArrowRight className="h-4 w-4 text-white" />
          </Link>
        </div>
        <div className="flex items-center justify-start max-w-[500px] bg-gradient-to-tl from-[#bebcb2] to-[#d5d5ce] rounded-full md:mr-16">
          <img
            className="w-auto h-full rounded-full p-6"
            src="/images/image-3.png"
            alt="AI & Data Science Club Logo"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
