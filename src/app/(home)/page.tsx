import Team from "~/components/Team";
import Hero from "~/components/Hero";
import RecentProjects from "~/components/RecentProjects";
import Schedule from "~/components/Schedule";
import LearnMore from "~/components/LearnMore";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearnMore />
      <Schedule />
      <RecentProjects />
      <Team />
    </>
  );
}
