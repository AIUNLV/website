import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa6";

interface DynamicIconProps {
  iconId: string;
  size?: number;
  className?: string;
}

const DynamicIcon = ({
  iconId,
  size = 24,
  className = "",
}: DynamicIconProps) => {
  const IconComponent = (FaIcons as Record<string, IconType>)[iconId];
  console.log(FaIcons as Record<string, IconType>);
  console.log(IconComponent);
  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default DynamicIcon;
