import React from "react";

function Navigation() {
  return (
    <div className="bg-stone-200 flex gap-5 justify-between self-center p-6 max-w-full rounded-3xl shadow-2xl w-[1000px] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-5 justify-between text-neutral-700 max-md:flex-wrap">
        <div className="my-auto text-3xl font-bold leading-9">h241</div>
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
  );
}

export default Navigation;
