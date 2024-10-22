import { texts } from "../data/texts";

const Footer = () => {
  return (
    <footer className="flex items-center justify-evenly p-4 bg-secondary">
      <img
        className="w-16 h-16 rounded-full"
        src="/AIDataScience_Image.jpg"
        alt="AI & Data Science Club Logo"
      />
      <span className="max-w-xs font-extralight">{texts.footer.text}</span>
    </footer>
  );
}

export default Footer;