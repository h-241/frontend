import React from "react";
import Footer from "./components/Footer";
import Nav2 from "./components/Nav2";

function Posts() {
  const jobs = [
    {
      postedAgo: "30 sec. ago",
      title: "Website Development",
      description:
        "I need a Website for a software consulting firm which will display our services specializing in AI, machine learning, data analytics, cloud computing, web app development, and mobile app development. Firstly you will make a design in Figma and then upon approval start developing that website in Webflow.",
      tags: ["AI", "Webflow"],
      price: 50,
    },
    {
      postedAgo: "1 min. ago",
      title: "Company Brand Identity",
      description:
        "We are looking for a talented professional to help us rebrand our existing gym business and implement new AI systems for automation. As part of this project, you will be responsible for redesigning our brand identity, including the logo, colors, and overall visual aesthetic.",
      tags: ["Figma", "Adobe"],
      price: 40,
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center px-16 pt-7 bg-stone-200 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1254px] max-md:max-w-full">
        <Nav2 />

        <div className="flex flex-col items-center px-16 max-md:px-5">
          <main className="mt-10 max-w-full w-[1000px] max-md:mt-8">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <section className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                <h1 className="grow items-start px-9 pt-60 pb-4 w-full text-3xl font-bold leading-8 rounded-3xl text-neutral-700 max-md:px-5 max-md:pt-10 max-md:mt-6 max-md:max-w-full bg-gradient-to-t from-stone-300 to-stone-200">
                  Jobs you might like
                </h1>
              </section>
              <ProfileCard />
            </div>
            <form className="justify-center px-4 py-3.5 mt-14 max-w-full text-base leading-6 whitespace-nowrap rounded-3xl border-2 border-solid bg-opacity-0 border-neutral-600 text-stone-500 w-[1000px] max-md:mt-10 max-md:max-w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                className="bg-none"
                type="search"
                id="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="flex gap-5 justify-between items-start px-6 py-6 mt-28 max-w-full rounded-3xl bg-stone-300 w-[1000px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
      <div className="shrink-0 bg-gradient-to-br from-purple_btn to-orange_btn rounded-3xl border-0 border-purple-600 border-solid h-[114px] w-[123px]" />
      <div className="flex gap-2 items-start self-stretch max-md:flex-wrap">
        <div className="flex flex-col grow shrink-0 self-end mt-9 basis-0 w-fit max-md:max-w-full">
          <div className="text-lg leading-6 text-stone-500 max-md:max-w-full">
            Posted {job.postedAgo}
          </div>
          <h3 className="mt-4 text-3xl font-bold leading-8 text-neutral-700 max-md:max-w-full">
            {job.title}
          </h3>
          <p className="mt-7 text-base leading-6 text-zinc-600 max-md:max-w-full">
            {job.description}
          </p>
          <div className="flex gap-5 justify-between mt-8 w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 text-base font-medium tracking-wide leading-6 text-white">
              {job.tags.map((tag) => (
                <div
                  key={tag}
                  className="justify-center p-3 bg-orange-600 rounded-3xl border-0 border-purple-600 border-solid max-md:px-5"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex gap-3.5 my-auto text-4xl font-bold leading-8 text-neutral-700">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b002d57f2ef45515bb1dafc53ec84116d621233e7363bad8ddd697e01cd213fc?apiKey=07e306b349a24c27af5a8175744a820c&"
                alt="Dollar sign icon"
                className="shrink-0 aspect-[0.79] w-[23px]"
              />
              <div>{job.price}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9537097949e3887b26bc9ccaf099a9876a1a9a38cc09e2cb32115396507401a?apiKey=07e306b349a24c27af5a8175744a820c&"
        alt="Bookmark icon"
        className="shrink-0 self-start w-5 aspect-[1.11] fill-neutral-600"
      />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start py-5 pr-20 pl-5 w-full rounded-3xl bg-zinc-600 text-stone-200 max-md:pr-5 max-md:mt-6">
        <div className="shrink-0 bg-gradient-to-br from-purple_btn to-orange_btn rounded-3xl border-0 border-purple-600 border-solid h-[163px] w-[236px]" />
        <h2 className="mt-5 text-3xl font-medium tracking-wide leading-7">
          John Smith
        </h2>
        <p className="mt-4 text-md leading-7">Web developer | Blockchain</p>
      </div>
    </div>
  );
}

export default Posts;
