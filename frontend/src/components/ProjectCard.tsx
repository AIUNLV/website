import { Project } from "../data/projects";
interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative h-full w-full cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5
    transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:mx-auto md:max-w-sm md:rounded-2xl rounded-md md:px-10">
      <span className="absolute top-10 z-0 md:h-20 md:w-20 h-10 w-10 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span> {/* background animation */}
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid md:h-20 md:w-20 w-10 h-10 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
          {project.icon}
        </span>
        <div className="space-y-6 font-semibold pt-5 text-lg leading-7 transition-all duration-300 group-hover:text-white/90">
          <p>{project.title}</p>
        </div>
        <div className="pt-5 text-base font-light leading-7 transition-all duration-300 group-hover:text-white">
          <p>{project.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
