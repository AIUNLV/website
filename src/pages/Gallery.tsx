import { useState, useEffect, useRef } from "react";
import {
  EventCard,
  ProjectCard,
  WorkshopCard,
} from "../components/GalleryCard";
import projects from "../data/projects";
import events from "../data/events";
import workshops from "../data/workshops";

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Events");
  const [prevTab, setPrevTab] = useState<string | null>(null);

  const [tabWidth, setTabWidth] = useState<number>(0);
  const [tabLeft, setTabLeft] = useState<number>(0);
  const tabRef = useRef<HTMLButtonElement | null>(null);

  // based on current tab change div
  useEffect(() => {
    if (tabRef.current) {
      setTabWidth(tabRef.current.offsetWidth);
      setTabLeft(tabRef.current.offsetLeft);
    }
  }, [activeTab]);

  const handleTabChange = (newTab: string) => {
    setPrevTab(activeTab);
    setActiveTab(newTab);
  };

  const tabs = ["Events", "Projects"]; // hide resources for now
  // const tabs = ["Events", "Projects", "Resources"];

  return (
    <div className="min-h-[85vh]">
      <main className="pt-32 pb-5 flex flex-col justify-center items-center space-y-10 md:mx-0 mx-10 ">
        <h1 className="md:text-6xl text-5xl">Club Gallery</h1>
        <div className="relative flex justify-center mb-4">
          {/* underline border div */}
          <div
            className="absolute h-0.5 bg-primary transition-all ease-in-out duration-500"
            style={{
              width: tabWidth,
              left: tabLeft,
              bottom: 0,
            }}
          />

          {tabs.map((tab, index) => (
            <button
              type="button"
              key={index}
              ref={activeTab === tab ? tabRef : null}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 text-base font-medium transition-colors duration-200 rounded-t-md border-b-2 border-transparent
              ${
                activeTab === tab
                  ? "text-primary bg-gray-400/10"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/10 hover:border-gray-200/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </main>
      <div className="overflow-hidden">
        {activeTab === "Events" && (
          <section
            className="flex flex-col justify-center items-center mb-10 md:mx-0 mx-10"
            data-aos="fade-right"
          >
            <h2 className="text-4xl">Events</h2>
            <h3 className="text-xl text-gray-700 md:text-left text-center">
              Join us for workshops, talks, and more!
            </h3>
            <ul className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-6xl mt-5">
              {events.map((event, index) => (
                <li key={index} className="h-full w-full">
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === "Projects" && (
          <section
            className="flex flex-col justify-center items-center mb-10 md:mx-0 mx-10"
            data-aos={prevTab == "Events" ? "fade-left" : "fade-right"}
          >
            <h2 className="text-4xl">Projects</h2>
            <h3 className="text-xl text-gray-700 md:text-left text-center">
              The projects the club is actively working on!
            </h3>
            <ul className="grid md:grid-cols-3 justify-center items-center gap-10 max-w-6xl mt-5">
              {projects.map((project, index) => (
                <li key={index} className="h-full w-full">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === "Resources" && (
          <section
            className="flex flex-col justify-center items-center mb-10 md:mx-0 mx-10"
            data-aos="fade-left"
          >
            <h2 className="text-4xl">Resources</h2>
            <h3 className="text-xl text-gray-700 md:text-left text-center">
              Club resources to continously help you grow!
            </h3>
            <ul className="grid md:grid-cols-1 justify-center items-center gap-10 max-w-6xl mt-5">
              {workshops.map((workshop, index) => (
                <li key={index} className="h-full w-full">
                  <WorkshopCard workshop={workshop} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default Gallery;
