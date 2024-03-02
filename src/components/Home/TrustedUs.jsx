import walmart from "../../assets/partner/walmat.png";
import cisco from "../../assets/partner/cisco.png";
import deloitte from "../../assets/partner/deloitte.png";
import volvo from "../../assets/partner/volvo.png";
import okta from "../../assets/partner/okta.png";

const TrustedUs = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <h3 className="text-center text-lg text-primary/60 mb-12">
          Trusted by 45M+ users
        </h3>
        <div className="flex  items-center flex-wrap justify-around">
          <div>
            <img src={walmart} alt="" />
          </div>
          <div>
            <img src={cisco} alt="" />
          </div>
          <div>
            <img src={volvo} alt="" />
          </div>
          <div>
            <img src={deloitte} alt="" />
          </div>
          <div>
            <img src={okta} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedUs;
