import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import brainStrom from "../../assets/Brainstorm.png";
import notion from "../../assets/notion.png";
import xd from "../../assets/xd.png";
import figma from "../../assets/figma.png";
import Vector from "../../assets/Vector.png";
const UiuxDesign = () => {
  return (
    <section className="py-[90px]">
      <div className="container">
        <div className="">
          <h2 className="text-primary  text-5xl font-bold  mb-10 tracking-tighter">
            Built for all kinds of teams
          </h2>
        </div>
        <Tabs>
          <TabList className={`border-b-0 flex gap-2 mb-7`}>
            <Tab
              selectedClassName="border-[#F2F2F2] px-6 py-4 rounded-full bg-[#F1F3FD]"
              className={
                "border border-solid text-primary border-[#F2F2F2] px-6 py-4 rounded-full cursor-pointer"
              }
            >
              UX & Design
            </Tab>
            <Tab
              selectedClassName="border-[#F2F2F2] px-6 py-4 rounded-full bg-[#F1F3FD]"
              className={
                "border border-solid text-primary border-[#F2F2F2] px-6 py-4 rounded-full cursor-pointer"
              }
            >
              Marketing
            </Tab>
            <Tab
              selectedClassName="border-[#F2F2F2] px-6 py-4 rounded-full bg-[#F1F3FD]"
              className={
                "border border-solid text-primary border-[#F2F2F2] px-6 py-4 rounded-full cursor-pointer"
              }
            >
              Product Management
            </Tab>
            <Tab
              selectedClassName="border-[#F2F2F2] px-6 py-4 rounded-full bg-[#F1F3FD]"
              className={
                "border border-solid text-primary border-[#F2F2F2] px-6 py-4 rounded-full cursor-pointer"
              }
            >
              Engineering
            </Tab>
            <Tab
              selectedClassName="border-[#F2F2F2] px-6 py-4 rounded-full bg-[#F1F3FD]"
              className={
                "border border-solid text-primary border-[#F2F2F2] px-6 py-4 rounded-full cursor-pointer"
              }
            >
              Consultants
            </Tab>
            <Tab
              selectedClassName="border-[#F2F2F2] px-6 py-4 rounded-full bg-[#F1F3FD]"
              className={
                "border border-solid text-primary border-[#F2F2F2] px-6 py-4 rounded-full cursor-pointer"
              }
            >
              Agile Coaches
            </Tab>
            <Tab
              selectedClassName="border-[#F2F2F2] px-6 py-4 rounded-full bg-[#F1F3FD]"
              className={
                "border border-solid text-primary border-[#F2F2F2] px-6 py-4 rounded-full cursor-pointer "
              }
            >
              Sales
            </Tab>
          </TabList>

          <TabPanel>
            <div className="flex gap-5">
              <div className="basis-[25%]">
                <div className="flex gap-4 flex-col">
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Build low-fi wireframes
                  </p>
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Involve stakeholders in the design process
                  </p>
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Run engaging design workshops
                  </p>
                </div>
                <Link
                  to={""}
                  className="py-4 text-lg flex items-center text-secondary rounded-full gap-2 "
                >
                  <span className="underline underline-offset-4">
                    Learn more
                  </span>
                  <FaArrowRight />
                </Link>
                <div className="mt-20">
                  <p className="text-primary/60 text-lg">
                    Integrate your favorite tools
                  </p>
                  <div className="flex items-center gap-5 mt-6">
                    <div>
                      <img src={Vector} alt="" />
                    </div>
                    <div>
                      <img src={xd} alt="" />
                    </div>
                    <div>
                      <img src={figma} alt="" />
                    </div>
                    <div>
                      <img src={notion} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-[75%]">
                <img className="w-full object-cover" src={brainStrom} alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-5">
              <div className="basis-[25%]">
                <div className="flex gap-4 flex-col">
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Build low-fi wireframes
                  </p>
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Involve stakeholders in the design process
                  </p>
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Run engaging design workshops
                  </p>
                </div>
                <Link
                  to={""}
                  className="py-4 text-lg flex items-center text-secondary rounded-full gap-2 "
                >
                  <span className="underline underline-offset-4">
                    Learn more
                  </span>
                  <FaArrowRight />
                </Link>
                <div className="mt-20">
                  <p className="text-primary/60 text-lg">
                    Integrate your favorite tools
                  </p>
                  <div className="flex items-center gap-5 mt-6">
                    <div>
                      <img src={Vector} alt="" />
                    </div>
                    <div>
                      <img src={xd} alt="" />
                    </div>
                    <div>
                      <img src={figma} alt="" />
                    </div>
                    <div>
                      <img src={notion} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-[75%]">
                <img className="w-full object-cover" src={brainStrom} alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-5">
              <div className="basis-[25%]">
                <div className="flex gap-4 flex-col">
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Build low-fi wireframes
                  </p>
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Involve stakeholders in the design process
                  </p>
                  <p className="flex gap-[14px] items-center text-primary/60 text-lg">
                    <FaCheck />
                    Run engaging design workshops
                  </p>
                </div>
                <Link
                  to={""}
                  className="py-4 text-lg flex items-center text-secondary rounded-full gap-2 "
                >
                  <span className="underline underline-offset-4">
                    Learn more
                  </span>
                  <FaArrowRight />
                </Link>
                <div className="mt-20">
                  <p className="text-primary/60 text-lg">
                    Integrate your favorite tools
                  </p>
                  <div className="flex items-center gap-5 mt-6">
                    <div>
                      <img src={Vector} alt="" />
                    </div>
                    <div>
                      <img src={xd} alt="" />
                    </div>
                    <div>
                      <img src={figma} alt="" />
                    </div>
                    <div>
                      <img src={notion} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-[75%]">
                <img className="w-full object-cover" src={brainStrom} alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-5">
              <div className="basis-[25%]">
                <h3 className="mb-4 text-primary text-lg">Scrum Events</h3>
                <p className="text-primary/70 text-lg font-normal  pt-4 pb-10">
                  In the office, remote, or a mix of the two, with Miro, your
                  team can connect, collaborate, and co-create in one space no
                  matter where you are.
                </p>
                <Link
                  to={""}
                  className=" py-4  flex items-center text-secondary rounded-full gap-2 "
                >
                  <span className="underline underline-offset-4">
                    Learn more
                  </span>
                  <FaArrowRight />
                </Link>
              </div>
              <div className="basis-[75%]">
                <img className="w-full object-cover" src={brainStrom} alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-5">
              <div className="basis-[25%]">
                <h3 className="mb-4 text-primary text-lg">Mapping</h3>
                <p className="text-primary/70 text-lg font-normal  pt-4 pb-10">
                  In the office, remote, or a mix of the two, with Miro, your
                  team can connect, collaborate, and co-create in one space no
                  matter where you are.
                </p>
                <Link
                  to={""}
                  className=" py-4  flex items-center text-secondary rounded-full gap-2 "
                >
                  <span className="underline underline-offset-4">
                    Learn more
                  </span>
                  <FaArrowRight />
                </Link>
              </div>
              <div className="basis-[75%]">
                <img className="w-full object-cover" src={brainStrom} alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-5">
              <div className="basis-[25%]">
                <h3 className="mb-4 text-primary text-lg">Research & Design</h3>
                <p className="text-primary/70 text-lg font-normal  pt-4 pb-10">
                  In the office, remote, or a mix of the two, with Miro, your
                  team can connect, collaborate, and co-create in one space no
                  matter where you are.
                </p>
                <Link
                  to={""}
                  className=" py-4  flex items-center text-secondary rounded-full gap-2 "
                >
                  <span className="underline underline-offset-4">
                    Learn more
                  </span>
                  <FaArrowRight />
                </Link>
              </div>
              <div className="basis-[75%]">
                <img className="w-full object-cover" src={brainStrom} alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-5">
              <div className="basis-[25%]">
                <h3 className="mb-4 text-primary text-lg">
                  Strategic Planning
                </h3>
                <p className="text-primary/70 text-lg font-normal  pt-4 pb-10">
                  In the office, remote, or a mix of the two, with Miro, your
                  team can connect, collaborate, and co-create in one space no
                  matter where you are.
                </p>
                <Link
                  to={""}
                  className=" py-4  flex items-center text-secondary rounded-full gap-2 "
                >
                  <span className="underline underline-offset-4">
                    Learn more
                  </span>
                  <FaArrowRight />
                </Link>
              </div>
              <div className="basis-[75%]">
                <img className="w-full object-cover" src={brainStrom} alt="" />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default UiuxDesign;
