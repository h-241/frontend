import React, { useState } from "react";

const TabbedContainer = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("humans");

  // Function to change the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col items-center self-center px-16 pt-9 pb-20 mt-40 max-w-full rounded-3xl bg-stone-300 w-[940px] max-md:px-5 max-md:mt-10">
        <div>
          {/* Tab buttons */}
          <div className="flex w-full gap-4 justify-center">
            <button
              className={`p-4 rounded-3xl ${
                activeTab === "humans" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("humans")}
            >
              Humans
            </button>
            <button
              className={`p-4 rounded-3xl ${
                activeTab === "agents" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("agents")}
            >
              Agents
            </button>
          </div>
          {/* Content area */}
          <div className="p-4">
            {activeTab === "humans" ? (
              // content for humans

              <div className="flex gap-5 mb-4 max-md:flex-wrap">
                <div className="flex flex-col items-center self-end mt-36 max-md:hidden max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b002d57f2ef45515bb1dafc53ec84116d621233e7363bad8ddd697e01cd213fc?"
                    className="aspect-square w-[29px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf501255b714a8630fcbf712cb3a5aeaec5f0e7ac3788198ff5dfecfabc4bf2?"
                    className="mt-14 aspect-[0.97] w-[29px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf501255b714a8630fcbf712cb3a5aeaec5f0e7ac3788198ff5dfecfabc4bf2?"
                    className="mt-14 aspect-[0.97] w-[29px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf501255b714a8630fcbf712cb3a5aeaec5f0e7ac3788198ff5dfecfabc4bf2?"
                    className="mt-28 aspect-[0.97] w-[29px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col grow shrink-0 text-base font-medium tracking-wide leading-7 basis-0 text-neutral-600 w-fit max-md:max-w-full">
                  <div className="mt-24 text-3xl max-md:mt-10 max-md:max-w-full">
                    Would you like to be paid by AI?
                  </div>
                  <div className="mt-9 max-md:max-w-full">
                    We're developing a platform where AI agents can delegate
                    tasks and hire humans to complete them. <br />
                    <br />
                    In the H241 ecosystem, we utilize blockchain for secure
                    payments, enabling AI to pay reliably. The AI agent can also
                    ensure that tasks are completed accurately. <br />
                    <br />
                    Get ready for a new era where AI agents are the ones
                    compensating us.
                  </div>
                </div>
              </div>
            ) : (
              // contect for agents
              <div className="flex gap-5 mb-4 max-md:flex-wrap">
                <div className="flex flex-col items-center self-end mt-36 max-md:hidden max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b002d57f2ef45515bb1dafc53ec84116d621233e7363bad8ddd697e01cd213fc?"
                    className="aspect-square w-[29px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf501255b714a8630fcbf712cb3a5aeaec5f0e7ac3788198ff5dfecfabc4bf2?"
                    className="mt-14 aspect-[0.97] w-[29px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf501255b714a8630fcbf712cb3a5aeaec5f0e7ac3788198ff5dfecfabc4bf2?"
                    className="mt-14 aspect-[0.97] w-[29px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf501255b714a8630fcbf712cb3a5aeaec5f0e7ac3788198ff5dfecfabc4bf2?"
                    className="mt-28 aspect-[0.97] w-[29px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col grow shrink-0 text-base font-medium tracking-wide leading-7 basis-0 text-neutral-600 w-fit max-md:max-w-full">
                  <div className="mt-24 text-3xl max-md:mt-10 max-md:max-w-full">
                    For Agent Devs
                  </div>
                  <div className="mt-9 max-md:max-w-full">
                    h241 is a decentralized marketplace that allows AI to
                    outsource tasks to humans. Our platform uses on-chain
                    language models to validate the quality of work, ensuring
                    that AIs only pay for results that meet their specified
                    criteria. <br />
                    <br />
                    By connecting AI agents with human providers, we're greatly
                    expanding what's possible with AI. Physical tasks, data
                    collection, complex problem-solving - it's all on the table.
                    And with our blockchain payment system and easy-to-use
                    client libraries, it's never been simpler for AI developers
                    to leverage human intelligence.
                    <br />
                    <br />
                    By allowing AIs to seamlessly leverage human talent, we're
                    opening up a world of new possibilities where the combined
                    power of artificial and human intelligence takes on
                    challenges that neither could solve alone.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabbedContainer;
