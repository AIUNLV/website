import { teams } from "~/data/members";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="mt-10 pb-16 text-center flex flex-col justify-center bg-gradient-to-b from-white to-gray-300">
      <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
      <div className="bg-gray-300/30 mx-10 md:mx-auto md:px-10 px-5 pt-10 rounded-3xl backdrop-blur-sm">
        {teams.map((team, i) => (
          <div key={i}>
            <span className="font-light underline underline-offset-2">
              {team.name}
            </span>
            <ul
              className={`flex flex-wrap justify-center md:gap-8 gap-2 mt-4 ${
                team.members.length > 4 ? "md:max-w-2xl" : "md:max-w-4xl" // for nicer print out with 5 in one section
              }
              ${
                team.members.length > 3 && team.members.length < 5
                  ? "max-w-sm"
                  : "max-w-xl" // for nicer print out with 5 in one section
              } mx-auto mb-10`}
              id={team.id}
            >
              {team.members.map(
                (member, index) =>
                  member.name && (
                    <li
                      key={index}
                      data-aos="fade-up"
                      data-aos-anchor={`#${team.id}`}
                      data-aos-duration={350}
                      data-aos-delay={250 * (index + i)}
                    >
                      <TeamCard member={member} />
                    </li>
                  ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
