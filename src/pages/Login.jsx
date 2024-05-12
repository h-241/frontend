import React from "react";

function InputField({ type, placeholder }) {
  return (
    <div className="justify-center px-4 py-3.5 mt-5 max-w-full text-base leading-6 whitespace-nowrap rounded-3xl border-2 border-solid bg-white bg-opacity-0 border-neutral-700 text-neutral-700 w-[390px]">
      {placeholder}
    </div>
  );
}

function SocialLoginButton({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 aspect-square w-[30px]"
    />
  );
}

function Login() {
  const inputFields = [
    { type: "email", placeholder: "email" },
    { type: "password", placeholder: "password" },
  ];

  const socialLoginButtons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3c4bd0e4f6d4c1bb145d4c7979435e86b979ecdc2e057ddd6b3997d59023241?apiKey=07e306b349a24c27af5a8175744a820c&",
      alt: "Social login button 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6b89e4488869ddca30931cff4ccfb7dbde8cd7db79ca33567fa883cda8a7d1e?apiKey=07e306b349a24c27af5a8175744a820c&",
      alt: "Social login button 2",
    },
  ];

  return (
    <section className="flex h-screen justify-center items-center bg-stone-200 max-md:px-5">
      <div className="flex flex-col items-center px-20 py-14 max-w-full rounded-3xl bg-stone-300 w-[619px] max-md:px-5 max-md:mt-10">
        <h1 className="self-start text-3xl font-bold leading-8 text-neutral-700 max-md:max-w-full">
          Log in
        </h1>
        {inputFields.map((field, index) => (
          <InputField
            key={index}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <div className="flex gap-5 justify-between mt-5 max-w-full w-[381px]">
          <button className="justify-center px-8 text-base font-medium tracking-wide leading-6 text-white bg-gradient-to-br from-purple_btn to-orange_btn rounded-3xl border-0 border-purple-600 border-solid max-md:px-5">
            Log in{" "}
          </button>
          <div className="self-start px-4 pt-2.5 pb-4 mt-3 text-base leading-6 text-center whitespace-nowrap bg-stone-300 text-neutral-700">
            or
          </div>
          <div className="flex gap-3 justify-between my-auto">
            {socialLoginButtons.map((button, index) => (
              <React.Fragment key={index}>
                <SocialLoginButton src={button.src} alt={button.alt} />
                {index !== socialLoginButtons.length - 1 && (
                  <div className="shrink-0 w-0.5 border-2 border-solid bg-neutral-700 border-neutral-700 h-[30px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
