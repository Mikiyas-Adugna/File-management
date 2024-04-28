import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";

export default function sidebar({ isMenuTranslated }) {
  const [index, setIndex] = useState(1);

  const toggleActive = (index) => {
    setIndex(index);
  };

  return (
    <div
      className={`fixed left-0 top-0 w-64 h-full bg-gray-800 p-4 z-50 transition-transform ${
        isMenuTranslated ? "-translate-x-full" : ""
      }`}
    >
      <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
        <img
          src="https://placehold.co/32x32"
          alt=""
          className="w-8 h-8 rounded object-cover"
        />
        <span className="text-lg font-bold text-white ml-3">Company name</span>
      </a>
      <ul className="mt-4">
        <NavLink to="dashboard" onClick={() => toggleActive(1)}>
          <li
            className={`mb-1  rounded-md ${
              index === 1 ? "bg-gray-700" : "hover:bg-gray-900"
            }`}
          >
            <div className="flex items-center py-2 px-4 text-gray-300">
              <RiDashboardFill className="ri-home-2-line mr-3 text-lg" />
              <span className="text-sm">Dashboard</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="renterCar" onClick={() => toggleActive(2)}>
          <li
            className={`mb-1  rounded-md ${
              index === 2 ? "bg-gray-700" : "hover:bg-gray-900"
            }`}
          >
            <div className="flex items-center py-2 px-4 text-gray-300">
              <FaCarSide className="ri-home-2-line mr-3 text-lg" />
              <span className="text-sm">Car</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="renterBooking" onClick={() => toggleActive(3)}>
          <li
            className={`mb-1  rounded-md ${
              index === 3 ? "bg-gray-700" : "hover:bg-gray-900"
            }`}
          >
            <div className="flex items-center py-2 px-4 text-gray-300">
              <FaCalendarCheck className="ri-home-2-line mr-3 text-lg" />
              <span className="text-sm">Booking</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="other" onClick={() => toggleActive(4)}>
          <li
            className={`mb-1  rounded-md ${
              index === 4 ? "bg-gray-700" : "hover:bg-gray-900"
            }`}
          >
            <div className="flex items-center py-2 px-4 text-gray-300">
              <FaRegCircleDot className="ri-home-2-line mr-3 text-lg" />
              <span className="text-sm">Other</span>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
