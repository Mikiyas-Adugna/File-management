import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
export default function nav() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-12 h-[120px] w-[120px]">
        
          <img src="../../../public/logo.png" alt="" />
          <div className="hidden space-x-8 font-bold lg:flex ">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>

        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <NavLink to="/login" className="hover:text-veryDarkViolet">
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70 cursor-pointer"
          >
            Sign Up
          </NavLink>
        </div>

        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <FaBars />
        </button>
      </div>

      <div
        id="menu"
        className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
