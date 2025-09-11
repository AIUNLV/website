
import { Project } from "~/data/projects";
import { ProjectCard } from "~/components/ProjectCard";

interface ProjectsProps {
  projects: Project[];
  prevTab?: string | null;
}

export const Projects = ({ projects, prevTab }: ProjectsProps) => {
  return (
    <section
      className="flex flex-col justify-center items-center mb-10 md:mx-0 mx-10"
      data-aos={prevTab === "Events" ? "fade-left" : "fade-right"}
    >
      <h2 className="text-4xl">Projects</h2>
      <h3 className="text-xl text-gray-700 md:text-left text-center">
        The projects the club is actively working on!
      </h3>
      <h5 className="text-gray-400 md:text-left text-center">
        Click on the project card for more information
      </h5>
      <ul className="grid md:grid-cols-3 justify-center items-center gap-10 max-w-6xl mt-5 mx-4">
        {projects.map((project, index) => (
          <li key={index} className="h-full w-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
