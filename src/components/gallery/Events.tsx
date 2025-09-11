import { useState, useEffect, useMemo } from "react";
import { Event } from "../../data/events";
import { EventCard } from "./EventCard";

interface EventsProps {
  events: Event[];
}

const EVENTS_PER_LOAD = 4;

export const Events = ({ events }: EventsProps) => {
  const [visibleCount, setVisibleCount] = useState(EVENTS_PER_LOAD);
  const [isLoading, setIsLoading] = useState(false);

  const { pastEvents, upcomingEvents } = useMemo(() => {
    const now = new Date();
    const past: Event[] = [];
    const upcoming: Event[] = [];

    events.forEach((event) => {
      if (event.date && event.date < now) {
        past.push(event);
      } else {
        upcoming.push(event);
      }
    });

    past.sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0));

    upcoming.sort(
      (a, b) => (a.date?.getTime() || 0) - (b.date?.getTime() || 0),
    );

    return { pastEvents: past, upcomingEvents: upcoming };
  }, [events]);

  const visiblePastEvents = pastEvents.slice(0, visibleCount);
  const hasMoreEvents = visibleCount < pastEvents.length;

  const loadMoreEvents = () => {
    if (isLoading || !hasMoreEvents) return;

    setIsLoading(true);

    // Simulate loading delay for smooth animation
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + EVENTS_PER_LOAD, pastEvents.length),
      );
      setIsLoading(false);
    }, 300);
  };

  // Reset visible count when events change
  useEffect(() => {
    setVisibleCount(EVENTS_PER_LOAD);
  }, [events]);

  return (
    <section
      className="flex flex-col justify-center items-center mb-10 md:mx-0 mx-10"
      data-aos="fade-right"
    >
      {upcomingEvents.length > 0 && (
        <div className="mb-24">
          <h2 className="text-4xl text-center mb-4">Upcoming Events</h2>
          <h3 className="text-xl text-gray-700 text-center mb-8">
            Join us for workshops, talks, and more!
          </h3>

          <ul className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-6xl mt-5">
            {upcomingEvents.map((event, index) => (
              <li
                key={`upcoming-${index}`}
                className="h-full w-full"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {visiblePastEvents.length > 0 && (
        <>
          <h2 className="text-4xl text-center mb-4">Past Events</h2>
          <h3 className="text-xl text-gray-700 text-center mb-8">
            Check out what we've been up to!
          </h3>

          <ul className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-6xl mt-5">
            {visiblePastEvents.map((event, index) => (
              <li
                key={`past-${index}`}
                className="h-full w-full"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay={index * 150}
              >
                <EventCard event={event} />
              </li>
            ))}
          </ul>

          {hasMoreEvents && (
            <LoadMoreButton
              loadMoreEvents={loadMoreEvents}
              isLoading={isLoading}
            />
          )}
        </>
      )}

      {/* No events message */}
      {events.length === 0 && (
        <div className="text-center">
          <h2 className="text-4xl mb-4">Events</h2>
          <p className="text-xl text-gray-600">
            No events scheduled at this time.
          </p>
        </div>
      )}
    </section>
  );
};

// -- load more button --
interface LoadMoreButtonProps {
  loadMoreEvents: () => void;
  isLoading: boolean;
}

const LoadMoreButton = ({ loadMoreEvents, isLoading }: LoadMoreButtonProps) => (
  <div className="flex justify-center mt-8">
    <button
      onClick={loadMoreEvents}
      disabled={isLoading}
      className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </div>
      ) : (
        "Load More Events"
      )}
    </button>
  </div>
);
