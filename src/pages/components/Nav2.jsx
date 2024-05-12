import React from "react";
import { Link } from "react-router-dom";

function Nav2() {
  return (
    <header className="flex flex-col items-center px-16 pt-7 bg-stone-200 max-md:px-5">
      <Link
        className="flex flex-col items-center w-full max-w-[1246px] max-md:max-w-full"
        to="/"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f598fd95d1f334a51cc591f266119ac575123aea26250f1713da533445488c80?apiKey=07e306b349a24c27af5a8175744a820c&"
          alt="Header image"
          className="max-w-full shadow-2xl aspect-[10] w-[1000px]"
        />
      </Link>
    </header>
  );
}

export default Nav2;
