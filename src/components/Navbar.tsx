import Link from "next/link";
import { socials } from "../data/links";
import { texts } from "../data/texts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";
import { ScheduleLink } from "./Schedule";

const Navbar = () => {
  return (
    <nav
      className="fixed flex items-center justify-between w-full md:h-20 h-16 md:px-10 px-8 bg-secondary/50 backdrop-blur-md shadow-xl rounded-b-3xl z-50"
      data-aos="fade-down"
      data-aos-duration="700"
    >
      <a
        className="flex items-center no-underline hover:scale-105 transform transition-transform duration-150"
        href="/"
      >
        <img
          className="md:w-16 md:h-16 h-12 w-12 rounded-full bg-secondary"
          src="/AIDataScience_Image.webp"
          alt="AI & Data Science Club Logo"
        />
        <span className="ml-2 text-lg font-bold md:inline hidden">
          UNLV AI & Data Science Club
        </span>
      </a>
      <div className="flex flex-row items-center justify-center gap-2">
        <ul className="items-center gap-6 mr-4 md:flex hidden">
          {socials.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                className="flex items-center justify-center rounded-full text-primary hover:text-primary/60 transition-all duration-300 hover:scale-110"
                aria-label={social.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            </li>
          ))}
          {/* <li> */}
          {/*   <ScheduleLink /> */}
          {/* </li> */}
        </ul>
        <GalleryDropdown />
        <a
          className="inline-block md:px-8 px-5 py-2 bg-primary rounded-xl hover:drop-shadow-md text-white md:text-base text-sm
        transition-all duration-500 bg-gradient-to-tl from-primary via-red-600 to-primary bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_100%]"
          href="https://involvementcenter.unlv.edu/organization/aidatascience"
          target="_blank"
          rel="noopener noreferrer"
        >
          {texts.nav.join_btn}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

const GalleryDropdown = () => {
  const galleryMenuItems = [
    { label: "Events", activeTab: "Events", path: "/gallery" },
    { label: "Projects", activeTab: "Projects", path: "/gallery" },
    { label: "Resources", activeTab: "Resources", path: "/gallery" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-block bg-white/50 px-8 py-2 border text-sm md:text-base border-black rounded-xl transition-all duration-700 text-black
            hover:shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),_0px_30px_60px_-30px_rgba(0,0,0,0.3),_inset_0px_-2px_6px_0px_rgba(10,37,64,0.35)]"
        >
          {texts.nav.explore_btn}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-md border border-black/20 shadow-xl rounded-xl">
        {galleryMenuItems.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link
              href={{ pathname: item.path, query: { tab: item.activeTab } }}
              className="flex items-center px-3 py-2 text-sm text-black hover:bg-black/5 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
