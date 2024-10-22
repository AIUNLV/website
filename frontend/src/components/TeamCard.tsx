import { Member } from "../data/members";

interface TeamCardProps {
  member: Member;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <a
      href={member.link}
      className="flex flex-col justify-evenly gap-2 items-center bg-secondary md:rounded-2xl rounded-lg md:w-44 w-32 md:h-60 h-48 duration-300 ease-in-out hover:scale-105 hover:shadow-xl p-4"
    >
      <img
        src={member.src}
        alt={`${member.name} Profile`}
        className="rounded-full md:h-20 md:w-20 object-cover h-16 w-16"
      />
      <span className="md:text-lg text-sm font-semibold max-w-[150px]">
        {member.name}
      </span>
      <span className="text-gray-700 font-light text-xs">{member.role}</span>
    </a>
  );
};

export default TeamCard;
