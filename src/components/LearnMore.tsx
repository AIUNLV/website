import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { texts } from "~/data/texts";

const LearnMore = () => {
  return (
    <div
      className="bg-gradient-to-t from-white to-gray-400 md:px-0 px-10"
      id="learnMore"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-center
        gap-16 md:py-24 py-10 px-auto mx-auto max-w-screen-xl"
      >
        <div className="md:max-w-lg max-w-sm space-y-8 items-start md:ml-16">
          <h1
            className="leading-4 font-extralight text-3xl text-primary"
            data-aos="flip-up"
          >
            {texts.learnMore.title}
          </h1>
          <h2
            className="leading-8 font-bold text-4xl max-w-sm"
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-delay="50"
          >
            {texts.learnMore.subtitle}
          </h2>
          <div className="flex items-stretch flex-row justify-start">
            <span
              className="bg-primary w-5 h-auto mx-2"
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-duration="1000"
            ></span>
            {/* separator */}
            <div className="block space-y-2 md:text-base text-sm">
              <p data-aos="fade-up">{texts.learnMore.text1}</p>
              <p data-aos="fade-up" data-aos-delay="450">
                {texts.learnMore.text2}
              </p>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-delay="1000"
            data-aos-duration="750"
          >
            <Link
              className="flex items-center gap-3 rounded-lg p-4 text-white w-36 transition-all duration-500
        bg-gradient-to-tl from-primary via-red-600 to-primary bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_100%]"
              href="/gallery"
            >
              {texts.learnMore.btn}{" "}
              <FaArrowRight className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          className="flex items-center justify-start max-w-[500px] bg-gradient-to-tl from-[#bebcb2] to-[#d5d5ce] rounded-full md:mr-16"
        >
          <img
            className="w-auto h-full rounded-full p-6"
            src="/images/image-3.webp"
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
