import { Event, formatTime, formatDate } from "../data/events";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div
      className="group relative w-full max-w-80 overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl"
    >
      <div className="max-h-64 overflow-hidden">
        {event.src && (
          <img
            src={event.src}
            alt={event.alt}
            className="w-full h-auto object-cover aspect-video"
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
              <p className="text-sm text-gray-600 ">{`${formatTime(
                event.startTime,
              )} - ${formatTime(event.endTime)}`}</p>
            )}
          </div>
        )}
        <p className="leading-tight mb-4 text-sm">{event.text}</p>
      </div>
    </div>
  );
};
