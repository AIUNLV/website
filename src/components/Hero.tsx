import Link from "next/link";
import { texts } from "~/data/texts";

const Hero = () => {
  return (
    <main className="bg-gradient-to-b from-white to-gray-400 md:border-b-8 border-b-gray-400 md:px-0 px-10">
      <div
        className="flex flex-col md:flex-row items-center justify-center
        gap-16 md:pt-40 pt-32 py-24 px-auto mx-auto max-w-screen-xl
        "
      >
        <div className="md:max-w-lg max-w-sm space-y-8 md:ml-16">
          <h1
            className="md:text-6xl text-4xl font-extrabold tracking-tighter md:max-w-full max-w-[400px] text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {texts.hero.title}
            <span className="bg-gradient-to-t from-primary to-red-500 inline-block text-transparent bg-clip-text pr-2">
              {/* needs padding right because of the gradient clipping */}
              {texts.hero.gradient}
            </span>
          </h1>
          <h2
            className="text-lg md:text-xl text-gray-700 font-light"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="250"
          >
            {texts.hero.subtitle}
          </h2>
          <div className="flex gap-2">
            <span
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="450"
            >
              <a
                className="inline-block px-8 py-2 text-sm md:text-base rounded-xl text-white 
            transition-all duration-500 bg-gradient-to-l from-primary via-red-600 to-primary bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_100%]"
                href="https://involvementcenter.unlv.edu/organization/aidatascience"
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts.hero.join_btn}
              </a>
            </span>
            <span
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="250"
            >
              <Link
                className="inline-block px-8 py-2 border text-sm md:text-base border-black rounded-xl transition-all duration-700 text-black
            hover:shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),_0px_30px_60px_-30px_rgba(0,0,0,0.3),_inset_0px_-2px_6px_0px_rgba(10,37,64,0.35)]"
                href="/gallery"
              >
                {texts.hero.explore_btn}
              </Link>
            </span>
          </div>
          <div
            className="flex justify-center md:justify-start"
            data-aos-id-stats
          >
            {texts.hero.stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center cursor-default text-sm md:text-base"
              >
                <span // separate element because hover doesn't work with it
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-stats]"
                  data-aos-delay={400 * index + 250}
                >
                  <div className="flex flex-col items-center md:items-start justify-center md:justify-start -space-y-2 hover:scale-110 transition-transform duration-300">
                    <span className="font-bold text-lg tracking-tight">
                      {stat.stat}
                    </span>
                    <span className="font-light">{stat.label}</span>
                  </div>
                </span>
                {/* render the divider only if not the last item */}
                {index < texts.hero.stats.length - 1 && (
                  <div
                    className="bg-primary w-[2px] h-full mx-8"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-stacks]"
                    data-aos-delay={400 * index + 500}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex items-center justify-start md:mr-16"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <img
            className="w-auto h-full max-h-[500px]"
            src="/images/image-1.webp"
            alt="AI & Data Science Club Logo"
            height={500}
            width={500}
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
