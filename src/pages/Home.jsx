import React, { useState } from "react";

// components
import Navigation from "./components/Navigation";
import TabbedContainer from "./components/Tabcontainer";

// assests
import pillar from "../assets/pillars.webp";
import Footer from "./components/Footer";

const serverURL = "https://email-collection-server-shridharapavel.replit.app";

function Home() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      alert("Thanks for signing up!");
    } catch (err) {
      console.log(err);
    }
    setEmail(""); // Reset the input after submitting
  };

  return (
    <div className="w-screen flex flex-col items-center px-16 pt-7 pb-20 bg-stone-200 max-md:px-5 relative">
      {/* <div className="h-80 w-80 rounded-full blur-3xl bg-stone-700 opacity-50 absolute left-0 top-60"></div> */}
      <div className="flex flex-col w-full max-w-[1254px] max-md:max-w-full">
        <Navigation />
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
            className="bg-gradient-to-br from-purple_btn to-orange_btn justify-center px-6  font-medium tracking-wide text-white rounded-3xl border-0 border-purple-600 border-solid leading-[150%] max-md:px-5"
            type="submit"
          >
            Sign up
          </button>
        </form>

        <TabbedContainer />

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
              The core applications of our service are to provide services,
              placed by individuals and businesses, received by workers. To
              honour completed contracts, to ensure their quality and provide
              secure payment.
            </div>
            <img
              loading="lazy"
              src={pillar}
              className="self-end mt-16 w-full rounded-3xl aspect-[4.76] max-md:mt-10 max-md:max-w-full"
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
        <Footer />
      </div>
    </div>
  );
}

export default Home;
