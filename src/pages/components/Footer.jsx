import React from "react";

function Footer() {
  return (
    <div className="flex gap-5 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex-auto my-auto text-base leading-6 text-neutral-700">
        @ 2024 h241, Inc. All rights reserved.
      </div>
      <div className="flex gap-5 justify-center px-2.5 pt-3 pb-2.5 max-md:px-5">
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
  );
}

export default Footer;
