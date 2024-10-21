import { members } from "../data/members";

const Team = () => {
  return (
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
  );
};

export default Team;
