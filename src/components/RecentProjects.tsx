import { texts } from "../data/texts";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <div className="bg-background md:px-0 px-10">
      <div
        className="flex flex-col items-center justify-center
        gap-16 md:py-24 py-10 px-auto mx-auto max-w-screen-xl"
      >
        <div className="md:max-w-lg max-w-sm space-y-8 items-start md:ml-16">
          <h1
            className="leading-4 font-extralight text-3xl text-primary"
            data-aos="flip-up"
          >
            {texts.recentProjects.title}
          </h1>
          <div className="flex items-center gap-4 md:flex-row flex-col">
            <h2
              className="leading-8 font-bold text-4xl max-w-sm"
              data-aos="fade-up"
              data-aos-duration="450"
              data-aos-delay="50"
            >
              {texts.recentProjects.subtitle}
            </h2>
            {/* @TODO: Make the button/link into custom component */}
            <div // NECESSARY WRAPPER FOR BUTTON BG ANIMATION
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              className="flex-1/2"
            >
              <Link
                className="flex w-full items-center gap-3 rounded-lg p-4 text-white transition-all duration-500
        bg-gradient-to-tl from-primary via-red-600 to-primary bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_100%]"
                to="/gallery"
                state={{
                  activeTab: "Projects",
                }}
              >
                {texts.recentProjects.btn}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-4 justify-center items-center">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
