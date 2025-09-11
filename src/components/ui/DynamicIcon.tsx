import { IconType } from "react-icons";
import { FaJetFighter, FaBrain, FaRobot, FaGlobe } from "react-icons/fa6";

interface DynamicIconProps {
  iconId: string;
  size?: number;
  className?: string;
}

const iconsMapping: Record<string, IconType> = {
  FaJetFighter,
  FaBrain,
  FaRobot,
  FaGlobe,
};

const DynamicIcon = ({
  iconId,
  size = 24,
  className = "",
}: DynamicIconProps) => {
  const IconComponent = iconsMapping[iconId];

  if (!IconComponent) {
    console.warn(`Icon "${iconId}" not found in mapping.`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default DynamicIcon;
