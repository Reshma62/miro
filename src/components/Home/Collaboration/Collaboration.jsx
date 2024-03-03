import GenericButton from "../../shared/button/GenericButton";
import CollaborationCard from "./CollaborationCard";

const Collaboration = () => {
  return (
    <section className="py-[60px]">
      <div className="max-w-[450px] mx-auto relative">
        <h2 className="  text-center font-bold text-3xl lg:text-5xl tracking-tighter">
          Collaborate without constraints
        </h2>
        <p className="absolute bg-yellow-300 text-primary px-2 py-1 rounded-md inline-block -right-1 lg:-right-16 -top-14 rotate-[20deg] font-bold uppercase ">
          Your Idea starts here
        </p>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <CollaborationCard
            title={"Free forever"}
            content={
              <>
                Our free plan gives you unlimited team members, 3 boards, and
                300+ expert-made templates. Signing up with your work email lets
                you bring in your team faster. See our{" "}
                <span className="text-secondary"> pricing plans </span> for more
                features.
              </>
            }
          />
          <CollaborationCard
            title={"Easy integrations"}
            content={
              <>
                Miro has 100+ powerful integrations with tools you already use
                like G Suite, Slack, and Jira, so your workflow is seamless.
                View the full list in our
                <span className="text-secondary"> Marketplace </span>
              </>
            }
          />
          <CollaborationCard
            title={"Security first"}
            content={
              <>
                We treat your data like you would — with the utmost care. We
                follow industry-leading security standards and give you tools to
                protect intellectual property. Learn more at our
                <span className="text-secondary"> Trust Center </span>
              </>
            }
          />
        </div>
        <div className=" mt-8 text-center  flex justify-center">
          <GenericButton buttonText={"Sign up free"} />
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
