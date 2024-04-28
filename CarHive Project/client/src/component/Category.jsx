import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Select, Option } from "@material-tailwind/react";

export default function Category() {
  return (
    <div>
      <div>
        <div className="pt-2 relative max-w-96 text-gray-600 mb-2">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="absolute top-3 right-3 mt-2 mr-2">
            <IoSearchOutline />
          </div>
        </div>
      </div>

      <select
        className="max-w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10"
      >
        <option selected>Choose a Category</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
}
