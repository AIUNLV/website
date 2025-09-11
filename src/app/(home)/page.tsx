import Team from "~/components/Team";
import Hero from "~/components/Hero";
import RecentProjects from "~/components/RecentProjects";
import LearnMore from "~/components/LearnMore";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearnMore />
      <RecentProjects />
      <Team />
    </>
  );
}
