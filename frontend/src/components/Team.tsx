import { teams } from "../data/members";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="mt-10 text-center flex flex-col justify-center bg-gradient-to-b from-white to-gray-300">
      <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
      <div className="bg-gray-300/30 mx-auto md:px-10 px-5 pt-10 rounded-3xl backdrop-blur-sm">
        {teams.map((team, index) => (
          <div key={index}>
            <span className="font-light underline underline-offset-2">
              {team.name}
            </span>
            <ul
              className={`flex flex-wrap justify-center gap-8 mt-4 ${
                team.members.length > 4 ? "md:max-w-2xl" : "md:max-w-4xl" // for nicer print out with 5 in one section
              }
              ${
                team.members.length > 3 && team.members.length < 5
                  ? "max-w-sm"
                  : "max-w-xl" // for nicer print out with 5 in one section
              } mx-auto mb-10`}
              data-aos-id={team.name}
            >
              {team.members.map(
                (member, index) =>
                  member.name && (
                    <li
                      key={index}
                      data-aos="fade-up"
                      data-aos-offset="2000" // neccessary because it was loading in early :(
                      data-aos-anchor={team.name}
                      data-aos-delay={250  * index}
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
