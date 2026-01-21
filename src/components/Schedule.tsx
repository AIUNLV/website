import { texts } from "~/data/texts";
import ImageViewer from "./ImageViewer";
import { FaCalendar } from "react-icons/fa6";

const Schedule = () => {
  return (
    <div className="bg-background md:px-0 px-10" id="schedule">
      <div
        className="flex flex-col items-center justify-center
        gap-16 md:py-24 py-10 px-auto mx-auto max-w-screen-xl"
      >
        <div className="md:max-w-lg max-w-sm space-y-8 items-start md:ml-16">
          <h1
            className="leading-4 font-extralight text-3xl text-primary"
            data-aos="fade-up"
          >
            {texts.schedule.title}
          </h1>
          <div className="flex items-center gap-4 md:flex-row flex-col">
            <h2
              className="leading-8 font-bold text-4xl max-w-md"
              data-aos="fade-up"
              data-aos-duration="450"
              data-aos-delay="50"
            >
              {texts.schedule.subtitle}
            </h2>
          </div>
        </div>

        <div
          className="flex gap-6 max-w-6xl mx-4 justify-center items-center"
          data-aos="fade"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          {/* <ImageViewer */}
          {/*   src={texts.schedule.img.src} */}
          {/*   alt={texts.schedule.img.alt} */}
          {/*   width={texts.schedule.img.width / 2} */}
          {/*   height={texts.schedule.img.height / 2} */}
          {/*   title={texts.schedule.title} */}
          {/* /> */}
        </div>
      </div>
    </div>
  );
};

export const ScheduleLink = () => (
  <ImageViewer
    src={texts.schedule.img.src}
    alt={texts.schedule.img.alt}
    width={texts.schedule.img.width / 2}
    height={texts.schedule.img.height / 2}
    title={texts.schedule.title}
  >
    <span className="text-2xl flex items-center justify-center rounded-full text-primary hover:text-primary/60 transition-all duration-300 hover:scale-110">
      <FaCalendar />
    </span>
  </ImageViewer>
);

export default Schedule;
