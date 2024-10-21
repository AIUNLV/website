import "../index.css";
import { texts } from "../data/texts";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{texts.title}</title>
      </head>
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <Hero />
      </main>
      <Team />
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
