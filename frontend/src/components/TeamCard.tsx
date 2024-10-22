import { Member } from "../data/members";

interface TeamCardProps {
  member: Member;
}

const TeamCard = ({member}: TeamCardProps) => {
  return (
    <a href={member.link} className="flex flex-col justify-evenly gap-2 items-center bg-secondary rounded-2xl w-44 h-60 duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={member.src}
        alt={`${member.name} Profile`}
        className="rounded-full h-20 w-20 object-cover"
      />
      <span className="text-lg font-semibold max-w-[150px]">{member.name}</span>
      <span className="text-gray-700 font-light">{member.role}</span>
    </a>
  );
}

export default TeamCard