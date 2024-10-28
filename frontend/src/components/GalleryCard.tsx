import { Project } from "../data/projects";
import { Event, formatTime, formatDate } from "../data/events";

interface ProjectCardProps {
  project: Project;
}

interface EventCardProps {
  event: Event;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="group relative h-full w-full max-w-80 cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:mx-auto md:max-w-sm rounded-xl md:px-10"
    >
      <span className="absolute top-10 z-0 md:h-20 md:w-20 h-10 w-10 rounded-full bg-primary transition-all md:duration-500 duration-1000 group-hover:scale-[20]"></span>{" "}
      {/* background animation */}
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid md:h-20 md:w-20 w-10 h-10 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary ">
          {project.icon}
        </span>
        <div className="font-semibold mt-5 text-lg leading-7 transition-all duration-300 group-hover:text-white">
          <p>{project.title}</p>
        </div>
        <div className="mt-2 text-base font-normal transition-all duration-300 group-hover:text-white leading-tight">
          <p>{project.text}</p>
        </div>
      </div>
    </div>
  );
};

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div
      className="group relative w-full max-w-80 cursor-pointer overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl"
    >
      <div className="max-h-64 overflow-hidden">
        {event.src && (
          <img
            src={event.src}
            alt={event.alt}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
      <div className="mt-4 pb-6 px-6 space-y-2">
        <div className="text-xl font-semibold mb-1">
          <p>{event.title}</p>
        </div>
        <p className="text-sm">{event.room}</p>
        {event?.date && (
          <div className="flex gap-4 items-center justify-between font-light">
            <p className="text-sm text-gray-800">{formatDate(event.date)} </p>
            {event?.startTime && event?.endTime && (
              <p className="text-sm text-gray-600 ">{`${formatTime(event.startTime)} - ${formatTime(event.endTime)}`}</p>
            )}
          </div>
        )}
        <p className="leading-tight mb-4 text-sm">{event.text}</p>
      </div>
    </div>
  );
};
