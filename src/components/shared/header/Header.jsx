import { Link } from "react-router-dom";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import Logo from "../../../assets/header/logo.png";
import { TbWorld } from "react-icons/tb";
const Header = () => {
  return (
    <header className="px-[30px] py-[33px]">
      <div className="flex justify-between items-center">
        {/* menu and logo */}
        <nav className="flex items-center gap-6">
          <img src={Logo} alt="logo" />
          <ul className="flex gap-5 items-center text-base font-normal text-primary leading-6 font-sans pl-0 m-0 no-underline">
            <li className="flex gap-2 items-center ">
              <Link className="text-primary no-underline" to={"/"}>
                Product
              </Link>
              <FaAngleDown className="mt-1" size={12} />
            </li>
            <li className="flex gap-2 items-center ">
              <Link className="text-primary no-underline" to={"/"}>
                Solutions
              </Link>
              <FaAngleDown className="mt-1" size={12} />
            </li>
            <li className="flex gap-2 items-center ">
              <Link className="text-primary no-underline" to={"/"}>
                Resources
              </Link>
              <FaAngleDown className="mt-1" size={12} />
            </li>
            <li className="">
              <Link className="text-primary no-underline" to={"/product"}>
                Enterprise
              </Link>
            </li>
            <li className="">
              <Link className="text-primary no-underline" to={"/product"}>
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        {/* Login button  */}
        <div className="flex items-center gap-4">
          <p className="uppercase text-primary flex items-center gap-2">
            <TbWorld size={24} /> en
          </p>
          <Link to={""} className="text-primary">
            Contact Sales
          </Link>
          <Link to={""} className="text-primary">
            Login
          </Link>
          <Link
            to={""}
            className="px-[22px] py-4 flex items-center bg-secondary rounded-full gap-2 text-white"
          >
            Sign up free <FaArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
