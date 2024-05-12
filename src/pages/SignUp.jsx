import React from "react";
import Navigation from "./components/Navigation";

function Button({ children, className }) {
  return (
    <button
      className={`justify-center px-4 py-3.5 rounded-3xl border-2 border-solid bg-white bg-opacity-0 border-neutral-700 ${className}`}
    >
      {children}
    </button>
  );
}

function SocialButton({ src, alt, children }) {
  return (
    <div className="flex flex-1 gap-2 justify-between px-4 py-3 rounded-3xl border-2 border-solid bg-white bg-opacity-0 border-neutral-700 max-md:px-5">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 self-start aspect-[0.83] w-[25px]"
      />
      {children}
    </div>
  );
}

function Input({ placeholder }) {
  return (
    <input
      className="justify-center w-full px-4 py-3.5 rounded-3xl border-2 border-solid bg-white bg-opacity-0 border-neutral-700"
      placeholder={placeholder}
    ></input>
  );
}

function SignUp() {
  return (
    <div className="flex justify-center items-center px-16 text-base leading-6 h-screen bg-stone-200 text-neutral-700 max-md:px-5">
      <div className="flex flex-col items-center px-20 py-14 max-w-full rounded-3xl bg-stone-300 w-[619px] max-md:px-5 max-md:mt-10">
        <h1 className="self-start text-3xl font-bold leading-8 max-md:max-w-full">
          Sign up
        </h1>
        <div className="flex gap-2.5 mt-6 text-base leading-5">
          <SocialButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c4bd0e4f6d4c1bb145d4c7979435e86b979ecdc2e057ddd6b3997d59023241?apiKey=07e306b349a24c27af5a8175744a820c&"
            alt="Continue with Apple"
          >
            Continue with Apple
          </SocialButton>
          <SocialButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b89e4488869ddca30931cff4ccfb7dbde8cd7db79ca33567fa883cda8a7d1e?apiKey=07e306b349a24c27af5a8175744a820c&"
            alt="Continue with Google"
          >
            Continue with Google
          </SocialButton>
        </div>
        <div className="px-5 pt-2.5 pb-4 mt-2 text-center whitespace-nowrap bg-stone-300">
          or
        </div>
        <form className="flex flex-col gap-2.5 items-start max-w-full w-[390px]">
          <div className=" grid grid-cols-2 gap-2.5 w-full">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>

          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <div className="flex gap-5 justify-between mt-7 text-sm leading-5 text-orange-600">
            <input
              type="checkbox"
              id="policyCheckbox"
              className="shrink-0 self-start rounded-3xl border-2 border-solid bg-white bg-opacity-0 border-neutral-700 h-[30px] w-[30px]"
            />
            <label htmlFor="policyCheckbox" className="w-full">
              Yes, I understand and agree to the{" "}
              <a href="#" className="text-orange-600">
                policy.
              </a>
            </label>
          </div>
          <Button className="justify-center p-3 mt-5 font-medium tracking-wide text-white whitespace-nowrap bg-gradient-to-br from-purple_btn to-orange_btn rounded-3xl border-0 border-purple-600 border-solid leading-[150%] max-md:px-5">
            submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
