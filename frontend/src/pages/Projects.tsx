import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="min-h-[85vh]">
      <main className="pt-32 py-24 flex flex-col justify-center items-center space-y-2 md:mx-0 mx-10 ">
        <h1 className="text-6xl ">Projects</h1>
        <h2 className="text-xl text-gray-700 md:text-left text-center">
          The projects the club is actively working on!
        </h2>
      </main>
      <section className="flex flex-col justify-center items-center mb-20 md:mx-0 mx-10">
        <ul className="grid md:grid-cols-3 justify-center items-center gap-10 max-w-6xl">
          {projects.map((project, index) => (
            <li key={index} className="h-full w-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
