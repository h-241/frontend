import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-stone-200 flex gap-5 justify-between mx-auto p-6 max-w-full rounded-3xl shadow-2xl w-[1000px] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-5 justify-between text-neutral-700 max-md:flex-wrap">
        <div className="my-auto text-3xl font-bold leading-9">h241</div>
        <div className="flex gap-4 justify-between px-2 py-3 text-base font-medium tracking-wide leading-6 max-md:flex-wrap">
          <NavLink className=" px-4 py-2 rounded-2xl hover:bg-stone-100">
            About Us
          </NavLink>
          <NavLink className=" px-4 py-2 rounded-2xl hover:bg-stone-100">
            Pricing
          </NavLink>
          <NavLink
            className=" px-4 py-2 rounded-2xl hover:bg-stone-100"
            to="/interface"
          >
            Interface
          </NavLink>
        </div>
      </div>
      <div className="flex gap-4 justify-between pl-6 text-base font-medium tracking-wide leading-6">
        <Link className="my-auto text-neutral-700" to="/login">
          Log In
        </Link>
        <Link
          className=" my-auto bg-gradient-to-br from-purple_btn to-orange_btn justify-center py-2 px-4 text-white rounded-3xl border-0 border-purple-600 border-solid max-md:px-5"
          to="/signup"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
