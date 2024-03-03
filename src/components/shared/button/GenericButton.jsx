import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const GenericButton = ({ buttonText }) => {
  return (
    <Link
      to={""}
      className="px-5 lg:px-[22px] py-4  justify-center lg:text-base text-sm flex items-center bg-secondary rounded-full gap-2 text-white"
    >
      {buttonText} <FaArrowRight />
    </Link>
  );
};

export default GenericButton;
