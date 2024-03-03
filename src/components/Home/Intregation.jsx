import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import intregaImg from "../../assets/intregation.png";
const Intregation = () => {
  return (
    <section className="md:py-[60px] py-6">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between items-center gap-5 md:gap-24">
          <div className="md:basis-[40%]">
            <h2 className="  font-bold text-4xl lg:text-5xl tracking-tighter">
              Connect your tools, close your tabs
            </h2>
            <p className="text-primary/70 text-lg font-normal  pt-4 pb-10">
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom, Miro has 100+ integrations with tools you
              already use and love.
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
            <img src={intregaImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intregation;
