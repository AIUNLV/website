import { texts } from "../data/texts";
import Team from "../components/Team";
import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";

const Home = () => {
  return (
      <div className="h-screen">
        <Hero />
        <LearnMore />
        <Team />
        <footer className="flex items-center justify-evenly p-4 bg-secondary">
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
