import React from "react";
import { NavLink } from "react-router-dom";

export default function hero() {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-4xl font-bold text-center lg:text-5xl lg:max-w-lg lg:text-left">
            Your Adventure Starts Here Rent Cars Hassle-Free
          </h1>
          <p className="text-xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Convenient booking, competitive rates, and exceptional customer
            service – your satisfaction guaranteed
          </p>
          <div className="mx-auto lg:mx-0">
            <NavLink
              to="/carList"
              className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
            >
              Explore Our Fleet
            </NavLink>
          </div>
        </div>

        <div className="mb-24 mx-auto  md:w-180 lg:mb-0 lg:w-1/2">
          <img src="../../../public/heroImage.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
