import { admins, outreach, development, volunteering } from "../data/members";
import TeamCard from "./TeamCard";


const Team = () => {
  return (
    <section className="my-10 text-center flex justify-center">
      <div className="bg-gray-300/30 px-20 pt-10 rounded-3xl">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <span className="font-light underline underline-offset-2">Adminstrative</span>
        <ul className="flex flex-wrap justify-center gap-8 mt-4 max-w-4xl mx-auto mb-10">
          {admins.map(
            (member, index) =>
              member.name &&
              member.role && (
                <li key={index}>
                  <TeamCard member={member} />
                </li>
              ),
          )}
        </ul>
        <span className="font-light underline underline-offset-2">Outreach</span>
        <ul className="flex flex-wrap justify-center gap-8 mt-4 max-w-4xl mx-auto mb-10">
          {outreach.map(
            (member, index) =>
              member.name &&
              member.role && (
                <li key={index}>
                  <TeamCard member={member} />
                </li>
              ),
          )}
        </ul>
        <span className="font-light underline underline-offset-2">Volunteering</span>
        <ul className="flex flex-wrap justify-center gap-8 mt-4 max-w-4xl mx-auto mb-10">
          {volunteering.map(
            (member, index) =>
              member.name &&
              member.role && (
                <li key={index}>
                  <TeamCard member={member} />
                </li>
              ),
          )}
        </ul>
        <span className="font-light underline underline-offset-2">Development</span>
        <ul className="flex flex-wrap justify-center gap-8 mt-4 max-w-3xl mx-auto mb-16">
          {development.map(
            (member, index) =>
              member.name &&
              member.role && (
                <li key={index}>
                  <TeamCard member={member} />
                </li>
              ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default Team;
