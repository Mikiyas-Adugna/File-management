import React from "react";
import { NavLink } from "react-router-dom";

export default function joinUs() {
  return (
    <section id="cta" className="py-24 bg-darkViolet relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="../../public/bg-boost-desktop.svg"
          alt="Background Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col p-2 space-y-6 relative z-10">
        <h5 className="mx-auto text-4xl font-bold text-center text-white">
          Partner With Us
        </h5>
        <p className="mx-auto text-xl text-center text-white w-1/3">
          Partnering with us means your cars will be prominently featured in our
          search results, ensuring maximum exposure to potential renters.
        </p>
        <NavLink
          to={"/signUp"}
          className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight md:text-base md:py-3 focus:outline-none relative z-20"
        >
          Join Us
        </NavLink>
      </div>
    </section>
  );
}
