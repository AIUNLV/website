import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface EyeToggleProps {
  isVisible: boolean;
  onToggle: () => void;
}

const EyeToggle = ({ isVisible, onToggle }: EyeToggleProps) => {
  return (
    <button type="button" onClick={onToggle} className="focus:outline-none">
      {isVisible ? (
        <FaRegEye className="text-black md:h-6 md:w-6 h-4 w-4" />
      ) : (
        <FaRegEyeSlash className="text-black md:h-6 md:w-6 h-4 w-4" />
      )}
    </button>
  );
};

export default EyeToggle;
