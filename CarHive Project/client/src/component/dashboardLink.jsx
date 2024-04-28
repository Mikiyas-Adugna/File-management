import React from "react";
import { NavLink } from "react-router-dom";
export default function dashboardLink({ link }) {
  return (
    <NavLink to="renterCar">
      <li className="mb-1 group">
        <div
          className="flex items-center py-2 px-4 text-gray-300"
        >
          <i className="ri-home-2-line mr-3 text-lg"></i>
          <span className="text-sm">{link}</span>
        </div>
      </li>
    </NavLink>
  );
}
