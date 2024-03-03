import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaMinus, FaSquareYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import beforImage from "../../../assets/certo-dark-yellow.png";
const Footer = () => {
  return (
    <footer className="bg-primary py-8 lg:py-24 ">
      <div className="container px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-[60px]">
          <div className="text-white lg:col-span-3 ">
            <h2 className="font-extrabold text-2xl mb-3 lg:mb-12">
              Scan. Detect. Remove.
            </h2>
            <div className="flex items-center gap-4 mb-9">
              <FaFacebookSquare size={36} />
              <FaTwitterSquare size={36} />
              <FaSquareYoutube size={36} />
            </div>
            <div className="flex items-center gap-6 mb-12">
              <Link className="text-xs underline" to={""}>
                Privacy Policy
              </Link>
              <Link className="text-xs underline" to={""}>
                Terms of Service
              </Link>
            </div>
            <p>
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p className="mt-5">
              Designed & developed by{" "}
              <Link to={""} className="underline">
                Bigger Picture
              </Link>
            </p>
          </div>
          <div className="text-white">
            <h2 className="text-white font-extrabold text-[32px] border-b border-solid border-white pb-6 mb-[60px]">
              Miro.
            </h2>
            <div className="flex flex-col gap-6 text-[#FFC247] tex-xl font-extrabold">
              <p className="flex items-center gap-6">
                <FaMinus size={20} /> iPhone
              </p>
              <p className="flex items-center gap-6">
                <FaMinus size={20} /> Android
              </p>
              <p className="flex items-center gap-6">
                <FaMinus size={20} /> Help
              </p>
              <p className="flex items-center gap-6">
                <FaMinus size={20} /> About
              </p>
              <p className="flex items-center gap-6">
                <FaMinus size={20} /> Insights
              </p>
            </div>
          </div>
          <div className="text-primary bg-[#FFC247] relative h-fit lg:col-span-3 p-9 rounded-[42px]">
            <div className="relative z-20">
              <h2 className="text-2xl font-extrabold mb-5">
                Sign up to our newsletter
              </h2>
              <p
                className="
            mb-9"
              >
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>
              <div className="w-full relative rounded">
                <input
                  placeholder="Email address"
                  type="text"
                  className="bg-white outline-0 px-4 py-2 w-full rounded-2xl"
                />
                <button className="bg-primary  font-extrabold rounded-tr-2xl rounded-br-2xl text-white px-7 py-2 absolute right-0">
                  submit
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 z-10">
              <img className="mx-auto" src={beforImage} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-7 md:mt-20">
          <p className="max-w-[711px] w-full text-white text-sm">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
            registered in the U.S. and other countries. App Store is a service
            mark of Apple Inc. Android, Google Play and the Google Play logo are
            trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
