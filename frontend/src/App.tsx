import "./index.css";
import { texts } from "./data/texts";
import { members } from "./data/members";


const Home = () => {

  console.log(members);
  
  return (
    <div className="flex flex-col h-screen">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{texts.title}</title>
      </head>
      <nav className="fixed flex items-center justify-between w-full h-20 p-4 bg-[#F1E9DE] shadow-md">
        <a
          className="flex items-center text-black no-underline hover:scale-105 transform transition-transform duration-150"
          href="/"
        >
          <img
            className="w-16 h-16 rounded-full bg-[#F1E9DE]"
            src="/AIDataScience_Image.jpg"
            alt="AI & Data Science Club Logo"
          />
          <span className="ml-2 text-lg font-bold">{texts.logo_title}</span>
        </a>
        <a
          className="inline-block px-4 py-2 text-black bg-[#F1E9DE] border border-[#D4C2B3] rounded transition filter hover:drop-shadow-md"
          href="https://involvementcenter.unlv.edu/organization/aidatascience"
          target="_blank"
          rel="noopener noreferrer"
        >
          {texts.join_btn}
        </a>
      </nav>
      <main className="flex-grow bg-gray-50">
        <div className="flex items-center justify-center gap-20 py-24 bg-[#B71F31]">
          <img
            className="w-64 h-64 object-cover rounded-full p-4 bg-[#F1E9DE]"
            src="/AIDataScience_Image.jpg"
            alt="AI & Data Science Club Logo"
          />
          <div className="max-w-sm p-4">
            <h1 className="text-5xl font-bold text-white">
              {texts.hero_title}
            </h1>
            <p className="text-lg text-gray-200">{texts.hero_subtitle}</p>
          </div>
        </div>
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <ul className="flex flex-wrap justify-center gap-8 mt-4 max-w-3xl mx-auto">
            {members.map(
              (member, index) =>
                member.name &&
                member.role && (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-center w-40 h-48 p-6 bg-[#F1E9DE] rounded-lg"
                  >
                    <span className="font-medium">{member.name}</span>
                    <span className="text-gray-500">{member.role}</span>
                  </li>
                ),
            )}
          </ul>
        </section>
      </main>
      <footer className="flex items-center justify-evenly p-4 bg-[#F1E9DE]">
        <img
          className="w-16 h-16 rounded-full"
          src="/AIDataScience_Image.jpg"
          alt="AI & Data Science Club Logo"
        />
        <span className="max-w-xs">{texts.footer_text}</span>
      </footer>
    </div>
  );
};

export default Home;
