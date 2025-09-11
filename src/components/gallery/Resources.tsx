import { Workshop } from "../../data/workshops";
import { WorkshopCard } from "../WorkshopCard";

interface ResourcesProps {
  workshops: Workshop[];
}

export const Resources = ({ workshops }: ResourcesProps) => {
  return (
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
  );
};
