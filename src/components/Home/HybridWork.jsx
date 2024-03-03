import { Link } from "react-router-dom";
import hybridImg from "../../assets/hybridwork.png";
import { FaArrowRight } from "react-icons/fa6";

const HybridWork = () => {
  return (
    <section className="md:py-[60px] py-6">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between items-center gap-5 md:gap-24">
          <div className="md:basis-[40%]">
            <h2 className="  font-bold text-4xl lg:text-5xl tracking-tighter">
              Work together, wherever you work
            </h2>
            <p className="text-primary/70 text-lg font-normal  pt-4 pb-10">
              In the office, remote, or a mix of the two, with Miro, your team
              can connect, collaborate, and co-create in one space no matter
              where you are.
            </p>
            <Link
              to={""}
              className=" py-4  flex items-center text-secondary rounded-full gap-2 "
            >
              <span className="underline underline-offset-4">Learn more</span>
              <FaArrowRight />
            </Link>
          </div>
          <div className="md:basis-1/2">
            <img src={hybridImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridWork;
