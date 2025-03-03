import { useState } from "react";
import { Project } from "../data/projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import DynamicIcon from "./DynamicIcon";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="group relative h-full w-full cursor-pointer max-w-80 overflow-hidden bg-white px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5
        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:mx-auto md:max-w-sm rounded-xl md:px-10"
        >
          <span
            className={`absolute top-10 z-0 md:h-20 md:w-20 h-12 w-12 rounded-full bg-primary transition-all md:duration-500 duration-1000 group-hover:scale-[20] ${
              open ? "scale-[20]" : ""
            }`}
          ></span>{" "}
          {/* background animation */}
          <div className="relative z-10 mx-auto max-w-md">
            <span
              className={`grid md:h-20 md:w-20 w-12 h-12 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary ${
                open ? "bg-primary" : ""
              }`}
            >
              <DynamicIcon
                iconId={project.icon}
                className="text-white md:h-10 md:w-10 h-7 w-7 transition-none group-hover:animate-bounce delay-200"
              />
            </span>
            <div
              className={`font-semibold mt-5 text-lg leading-7 transition-all duration-300 group-hover:text-white text-left ${
                open ? "text-white" : ""
              }`}
            >
              <p>{project.title}</p>
            </div>
            <div
              className={`mt-2 text-base font-normal transition-all duration-300 group-hover:text-white leading-tight text-left ${
                open ? "text-white" : ""
              }`}
            >
              <p>{project.text}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="md:max-w-lg max-w-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <DynamicIcon
              iconId={project.icon}
              className="text-primary md:h-10 md:w-10 h-5 w-5"
            />
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {project.text}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {project.goal && (
            <div>
              <h3 className="text-lg font-semibold">Project Goal:</h3>
              <p>{project.goal}</p>
            </div>
          )}
          {project.dataset && (
            <div>
              <h3 className="text-lg font-semibold">Dataset:</h3>
              <a
                href={project.dataset}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Dataset
              </a>
            </div>
          )}
          {project.members && project.members.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold">Project Members:</h3>
              <ul className="list-none list-inside space-y-1">
                {project.members.map((member, index) => (
                  <li key={index} className="inline mr-2">
                    {member.href ? (
                      <a
                        href={member.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 hover:underline"
                      >
                        {member.name}
                      </a>
                    ) : (
                      <span>{member.name}</span>
                    )}
                    {index !== project.members!.length - 1 && <span>,</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.current && (
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block">
              Current Project
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
