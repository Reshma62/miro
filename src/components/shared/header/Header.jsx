import { Link } from "react-router-dom";
import { FaAngleDown, FaBarsStaggered } from "react-icons/fa6";
import Logo from "../../../assets/header/logo.png";
import { TbWorld } from "react-icons/tb";
import GenericButton from "../button/GenericButton";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="lg:px-[30px] px-5 py-6 border-b border-solid border-gray-200">
      <div className="flex justify-between items-center">
        {/* menu and logo */}
        <nav className="flex items-center gap-6  relative w-full">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex gap-5 items-center text-base font-normal text-primary leading-6 font-sans pl-0 m-0 no-underline">
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
          <div className="lg:hidden ml-auto ">
            {open ? (
              <IoIosCloseCircle onClick={() => setOpen(!open)} size={28} />
            ) : (
              <FaBarsStaggered onClick={() => setOpen(!open)} size={28} />
            )}
          </div>
          {/* Mobile menu */}
          <div
            className={`absolute ${
              open ? "translate-x-full" : "-translate-x-full"
            } top-full  bg-gray-100 shadow-lg h-svh w-1/2  py-5 lg:hidden transition-all duration-300`}
          >
            <ul className="flex flex-col  gap-5 items-center text-base font-normal text-primary leading-6 font-sans pl-0 m-0 no-underline">
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

            <div className=" items-center gap-4 flex flex-col mt-20">
              <p className="uppercase text-primary  items-center gap-2 flex">
                <TbWorld size={24} /> en
              </p>
              <Link to={""} className="text-primary  ">
                Contact Sales
              </Link>
              <Link to={""} className="text-primary">
                Login
              </Link>
              <GenericButton buttonText={"Sign up free"} />
            </div>
          </div>
        </nav>
        {/* Login button  */}
        <div className=" items-center gap-4 hidden lg:flex">
          <p className="uppercase text-primary  items-center gap-2 flex">
            <TbWorld size={24} /> en
          </p>
          <Link to={""} className="text-primary  ">
            Contact Sales
          </Link>
          <Link to={""} className="text-primary">
            Login
          </Link>
          <GenericButton buttonText={"Sign up free"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
