import sectionImag from "../../assets/section.png";
import GenericButton from "../shared/button/GenericButton";
const SectionPart = () => {
  return (
    <section
      className="container !bg-cover !bg-no-repeat !bg-center py-[290px]"
      style={{ background: `url(${sectionImag})` }}
    >
      <div className="flex flex-col justify-end items-end px-10 text-center">
        <div className="text-center space-y-2">
          {" "}
          <h3 className="text-[22px] font-bold text-primary">
            The Ways We Work
          </h3>
          <p className="text-lg  text-primary">
            How has our relationship with work changed?
          </p>
          <div className="inline-block">
            <GenericButton buttonText={"View the report"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPart;
