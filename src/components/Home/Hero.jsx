import GenericButton from "../shared/button/GenericButton";
import bannerImag from "../../assets/hero/heroBanner.png";
import g2Imag from "../../assets/hero/g2.png";
import getapp from "../../assets/hero/getapp.png";
import capterra from "../../assets/hero/capterra.png";
import { IoStar } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";
const Hero = () => {
  return (
    <section className="py-[60px]">
      <div className="container flex justify-between gap-[60px] flex-col md:flex-row">
        <div>
          <h1 className="text-primary  text-5xl font-bold max-w-[393px]">
            Take ideas from better to best
          </h1>
          <p className="text-primary/70 text-lg font-normal max-w-[428px] pt-4 pb-8">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </p>
          <input
            placeholder="Enter your work email"
            type="text"
            name=""
            id=""
            className="border border-solid border-[#5F5C80] rounded-full px-6 py-3 placeholder:text-lg outline-0 w-full inline-block mb-2"
          />
          <GenericButton buttonText={"Sign up free"} />
          <p className="text-sm text-primary/40 mt-2">
            Collaborate with your team within minutes
          </p>
          <div className="bg-[#F5F5F7] mt-10 rounded-lg p-[14px] max-w-[350px] w-full">
            <div className="flex gap-6">
              <div>
                <div className="flex items-center gap-1 mb-1 text-[#FF9D48]">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoMdStarHalf />
                </div>
                <p className="text-[11px] text-primary">
                  Based on 5149+ reviews:
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={g2Imag} alt="" />
                </div>
                <div>
                  <img src={getapp} alt="" />
                </div>
                <div>
                  <img src={capterra} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImag} alt="banner image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
