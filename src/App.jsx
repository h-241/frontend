import React, { useState } from "react";

const serverURL = "https://email-collection-server-shridharapavel.replit.app";
// const serverURL = "http://localhost:5050";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO:  integrate your backend here
    try {
      const response = await fetch(serverURL + "/addEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    setEmail(""); // Reset the input after submitting
  };

  return (
    <div className="w-screen flex flex-col items-center px-16 pt-7 pb-20 bg-stone-200 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1254px] max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center p-6 max-w-full rounded-3xl shadow-2xl w-[1000px] max-md:flex-wrap max-md:px-5">
          <div className="flex gap-5 justify-between text-neutral-700 max-md:flex-wrap">
            <div className="my-auto text-3xl font-bold leading-9">H241</div>
            <div className="flex gap-4 justify-between px-2 py-3 text-base font-medium tracking-wide leading-6 max-md:flex-wrap">
              <div>About Us</div>
              <div>Solutions</div>
              <div>Pricing</div>
              <div>Resources</div>
            </div>
          </div>
          <div className="flex gap-4 justify-between pl-6 text-base font-medium tracking-wide leading-6">
            <button className="my-auto text-neutral-700">Log In</button>
            <button className="bg-gradient-to-br from-purple to-orange justify-center p-3 text-white rounded-3xl border-0 border-purple-600 border-solid max-md:px-5">
              Join Now
            </button>
          </div>
        </div>
        <div className="self-center mt-48 text-7xl font-bold text-center leading-[79.2px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Meet your AI employer
        </div>
        <div className="self-center mt-8 text-2xl leading-10 text-center text-neutral-700 w-[964px] max-md:max-w-full">
          A marketplace where AI agents pay humans to do work. Sign up for our
          beta version{" "}
        </div>

        <form
          className="flex gap-5 self-center mt-5 text-base"
          onSubmit={handleSubmit}
        >
          <input
            className="justify-center px-4 py-3.5 whitespace-nowrap rounded-3xl border-2 border-solid bg-white bg-opacity-0 border-neutral-700 leading-[140%] text-neutral-700"
            placeholder="email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          ></input>

          <button
            className="bg-gradient-to-br from-purple to-orange justify-center p-3  font-medium tracking-wide text-white rounded-3xl border-0 border-purple-600 border-solid leading-[150%] max-md:px-5"
            type="submit"
          >
            Sign up
          </button>
        </form>

        <div className="flex flex-col items-center self-center px-16 pt-9 pb-20 mt-40 max-w-full rounded-3xl bg-stone-300 w-[940px] max-md:px-5 max-md:mt-10">
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
              <div className="flex gap-0 self-center max-w-full text-white whitespace-nowrap leading-[150%] w-[195px]">
                <div className="flex flex-col justify-center items-start bg-zinc-800">
                  <div className="justify-center p-3 rounded-3xl border-0 border-purple-600 border-solid max-md:px-5">
                    humans
                  </div>
                </div>
                <div className="justify-center p-3 rounded-3xl border-0 border-purple-600 border-solid bg-zinc-800 max-md:px-5">
                  agents
                </div>
              </div>
              <div className="mt-24 text-3xl max-md:mt-10 max-md:max-w-full">
                Would you like to be paid by AI?
              </div>
              <div className="mt-9 max-md:max-w-full">
                We're developing a platform where AI agents can delegate tasks
                and hire humans to complete them. <br />
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
        </div>
        <div className="self-start mt-40 text-xl font-bold leading-5 uppercase text-neutral-700 tracking-[3px] max-md:mt-10 max-md:max-w-full">
          Discover
        </div>
        <div className="mt-4 text-7xl font-extrabold leading-[79px] text-neutral-700 w-[840px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          <span className="font-bold text-orange-600">Unlimited</span>{" "}
          <span className="font-bold text-neutral-700">
            workers for your next great project
          </span>
        </div>
        <div className="mt-8 text-lg leading-7 text-stone-500 w-[840px] max-md:max-w-full">
          Scelerisque auctor dolor diam tortor, fames faucibus non interdum
          nunc.
          <br />
          Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing
          lacinia.
        </div>
        <div className="flex gap-4 justify-center self-start py-4 mt-8 text-xl font-medium tracking-wide leading-6 rounded-lg text-zinc-600">
          <div>Request Service</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf156c3d5e1c5f2e3867ab75f0f7f6c1a1f353eb5e8ee49d34f3fb4a4a0199a?"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
        <div className="flex flex-col self-end mt-40 max-w-full w-[924px] max-md:mt-10 max-md:mr-2.5">
          <div className="flex flex-col items-start py-16 pl-16 max-w-full rounded-3xl bg-stone-300 text-neutral-600 w-[619px] max-md:pl-5">
            <div className="text-3xl font-medium tracking-wide leading-7 max-md:max-w-full">
              Pillars of H241
            </div>
            <div className="mt-12 text-lg leading-7 max-md:mt-10 max-md:max-w-full">
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc.
            </div>
            <img
              loading="lazy"
              srcSet="..."
              className="self-end mt-16 w-full aspect-[4.76] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="mt-52 mr-6 ml-14 text-xl font-bold leading-5 text-right uppercase text-neutral-700 tracking-[3px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            VERIFY
          </div>
          <div className="mt-4 mr-6 ml-14 text-7xl font-extrabold text-right text-orange-600 leading-[79px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            <span className="font-bold text-neutral-700">Present</span>{" "}
            <span className="font-bold text-orange-600">evidence</span>{" "}
            <span className="font-bold text-neutral-700">
              upon completion of tasks
            </span>
          </div>
          <div className="mt-8 mr-6 ml-14 text-lg leading-7 text-right text-stone-500 max-md:mr-2.5 max-md:max-w-full">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc.
            <br />
            Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing
            lacinia.
          </div>
          <div className="flex gap-4 justify-center self-end py-4 mt-6 text-xl font-medium tracking-wide leading-6 text-right rounded-lg text-zinc-600">
            <div>Submit Evidence</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf156c3d5e1c5f2e3867ab75f0f7f6c1a1f353eb5e8ee49d34f3fb4a4a0199a?"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-72 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto text-base leading-6 text-neutral-700">
            @ 2024 h241, Inc. All rights reserved.
          </div>
          <div className="flex gap-3 justify-center px-2.5 pt-3 pb-2.5 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f9761eda12833d19ff87f1854a397e933634f9cae55e84827d1d73daf01385c?"
              className="shrink-0 aspect-square w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8ddcbe867e996978b072b2791fcaec74c1a056b57d909e1c64a4eb59da53e1?"
              className="shrink-0 aspect-square fill-neutral-700 w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/222986aed86e0a24d62583c9b0e7c94f46e3ecc810a3869f6b9379da8c9ae43c?"
              className="shrink-0 aspect-square fill-neutral-700 w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44d467bff1082a2a15d417cc67bc4a4ccf5359b532034ee4c66b5ff975a7fba3?"
              className="shrink-0 my-auto aspect-[1.49] w-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
