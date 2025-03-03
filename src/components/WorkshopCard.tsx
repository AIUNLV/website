import { Workshop } from "../data/workshops";

interface WorkshopCardProps {
  workshop: Workshop;
}

export const WorkshopCard = ({ workshop }: WorkshopCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-48 h-48">
          <img
            src={workshop.img || "/AIDataScience_Image.jpg"}
            alt={workshop.heading}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between p-4 flex-grow">
          <div>
            <h3 className="text-lg font-semibold mb-2">{workshop.heading}</h3>
            <p className="text-sm text-gray-600 mb-4">{workshop.subheading}</p>
          </div>
          <a
            href={workshop.href}
            target="_blank"
            className="inline-block md:px-8 px-5 py-2 bg-primary rounded-xl hover:drop-shadow-md text-white md:text-base text-sm self-start
            transition-all duration-500 bg-gradient-to-b from-primary via-red-600 to-primary bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_100%]"
          >
            View Resources
          </a>
        </div>
      </div>
    </div>
  );
};
