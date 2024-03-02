import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import intregaImg from "../../assets/intregation.png";
const Intregation = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <div className="flex justify-between items-center gap-24">
          <div className="basis-[40%] order-2">
            <h2 className="  font-bold text-5xl tracking-tighter">
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
          <div className="basis-1/2 order-1">
            <img src={intregaImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intregation;
