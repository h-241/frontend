import React from "react";
import Footer from "./components/Footer";
import Nav2 from "./components/Nav2";
import { Link } from "react-router-dom";

function Interface() {
  const jobs = [
    {
      title: "Website Development",
      description:
        "I need a Website for a software consulting firm which will display our services specializing in AI, machine learning...",
      price: 50,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9b5551d4acd73b5114ef64c9c15e91d4908c22780b2cf2831425285adea3ff1?apiKey=07e306b349a24c27af5a8175744a820c&",
    },
    {
      title: "Social Media Marketing",
      description: "Could you draft a social media marketing strategy for...",
      price: 40,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9b5551d4acd73b5114ef64c9c15e91d4908c22780b2cf2831425285adea3ff1?apiKey=07e306b349a24c27af5a8175744a820c&",
    },
  ];

  const agents = [
    { name: "Gemini" },
    { name: "ChatGPT4" },
    { name: "AgentBoard" },
  ];

  return (
    <div className="w-screen flex flex-col items-center px-16 pt-7 pb-20 bg-stone-200 max-md:px-5">
      <div className="flex flex-col w-full  max-w-[1254px] max-md:max-w-full">
        <Nav2 />
        <div className="mt-12 bg-brown-interface p-2 pl-12 rounded-xl grid grid-rows-3 grid-cols-5 gap-2">
          {/* box 1 - Assigned */}
          <div className=" p-4 flex flex-col max-w-[234px] text-stone-200">
            <div className="w-full text-3xl font-bold leading-8">Assigned</div>
            <div className="flex gap-2 mt-4 text-base font-medium leading-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b18a2cb9a044665a91bc9ae87d5e8ecbdce81c6569c99d3e0fede7297aa9bf4c?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Full Stack Development</div>
            </div>
          </div>

          {/* box 2 - On going */}
          <div className="border-solid border border-stone-300 p-2 flex flex-col px-5 text-stone-200">
            <div className="w-full text-3xl font-bold leading-8">Ongoing</div>
            <div className="flex gap-2 mt-4 text-base font-medium leading-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2bed83a795c69884bbba6f4a939b99363b00efb7aee2fba671abde5976f67d5?"
                className="shrink-0 self-start w-6 aspect-square"
              />
              <div>Embedded Systems Development</div>
            </div>
          </div>

          {/* box 3 - verified */}
          <div className="flex flex-col p-2 text-base font-medium leading-6 text-stone-200">
            <div className="w-full text-3xl font-bold leading-8">Verified</div>
            <div className="flex gap-2 mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c52f212805b36f275feea6111c91b752b8d560a1207d35d60fa0f3f43562d0?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Mobile App Development</div>
            </div>
            <div className="flex gap-2 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c52f212805b36f275feea6111c91b752b8d560a1207d35d60fa0f3f43562d0?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Quality Assurance</div>
            </div>
          </div>

          {/* box 4 - drag and drop */}
          <div className="border-solid border border-stone-300 col-span-3 row-span-2 col-start-2 row-start-1">
            <div className="flex flex-col">
              <div className="flex justify-center items-center py-20 rounded-2xl bg-stone-400 text-neutral-700 max-md:px-5 max-md:max-w-full m-6">
                <div className="flex flex-col items-center mt-6 mb-1.5">
                  <div className="self-stretch text-lg font-medium">
                    Drag and Drop
                  </div>
                  <div className="justify-center px-3.5 py-1 mt-1 text-base whitespace-nowrap">
                    or
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/192d84c01bca7e44c5dd30e08b96d04bae6a09989199bdc3e5ab199f951a17be?"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>
              <button className="justify-center self-center px-12 py-3 mt-6 text-base text-white whitespace-nowrap bg-orange-600 rounded-2xl max-md:px-5">
                Verify
              </button>
            </div>
          </div>

          {/* box 5 - jobs */}
          <div className="row-span-2 col-start-5 row-start-1">
            <section className="flex flex-col px-5 font-bold max-w-[215px] text-neutral-700">
              <Link
                className="w-full text-3xl leading-8 text-stone-200"
                to="/posts"
              >
                Jobs
              </Link>
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </section>
          </div>

          {/* box 6 - Agents */}
          <div className="col-start-5 row-start-3 p-2">
            <section className="flex flex-col px-5 text-lg font-bold leading-6 whitespace-nowrap max-w-[154px] text-stone-200">
              <h2 className="w-full text-3xl leading-8 pb-5">Agents</h2>
              {agents.map((agent, index) => (
                <AgentItem key={index} name={agent.name} />
              ))}
            </section>
          </div>

          {/* box 7 - instructions */}
          <div className="p-2 col-span-3 col-start-2 row-start-3">
            <div className="flex flex-col px-5 max-w-[778px] text-stone-200">
              <div className="w-full text-3xl font-bold leading-8 max-md:max-w-full">
                Instructions
              </div>
              <div className="mt-7 w-full text-base leading-6 max-md:max-w-full overflow-scroll">
                Create a website for our software consulting firm showcasing our
                expertise in AI, machine learning, data analytics, cloud
                computing, web app development, and mobile app development.
                Begin by designing the website layout using Figma. Once the
                design is finalized and approved, proceed with developing the
                website using Webflow. Ensure that the design reflects our
                professional image and effectively communicates our services to
                potential clients.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="flex flex-col px-2.5 py-3.5 mt-3 w-full rounded-3xl bg-stone-300">
      <div className="flex gap-1.5 text-base">
        <div className="flex-auto my-auto">{job.title}</div>
        <img
          loading="lazy"
          src={job.icon}
          alt={job.title}
          className="shrink-0 w-6 aspect-square"
        />
      </div>
      <div className="mt-3.5 text-xs leading-5 text-zinc-600">
        {job.description}
      </div>
      <div className="flex gap-1.5 self-end mt-5 text-4xl leading-8 whitespace-nowrap">
        <div className="flex gap-0.5 self-start">
          <div>${job.price}</div>
        </div>
      </div>
    </div>
  );
}

function AgentIcon() {
  return (
    <div className="shrink-0 bg-orange-600 rounded-2xl h-[39px] w-[41px]" />
  );
}

function AgentItem({ name }) {
  return (
    <div className="flex gap-2.5 mt-2">
      <AgentIcon />
      <div className="flex-auto my-auto">{name}</div>
    </div>
  );
}

export default Interface;
