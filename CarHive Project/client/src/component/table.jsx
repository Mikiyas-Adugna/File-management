import React from "react";
import Dropdown from "./dropdown";

export default function table() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-6">
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Recently added car</div>
        </div>
        <div className="flex items-center mb-4 order-tab">
          <button
            type="button"
            data-tab="order"
            data-tab-page="active"
            className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tl-md rounded-bl-md hover:text-gray-600 active"
          >
            Available
          </button>
          <button
            type="button"
            data-tab="order"
            data-tab-page="completed"
            className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-gray-600"
          >
            Reserved
          </button>
          <button
            type="button"
            data-tab="order"
            data-tab-page="canceled"
            className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tr-md rounded-br-md hover:text-gray-600"
          >
            Picked Up
          </button>
        </div>
        <div className="overflow-x-auto">
          <table
            className="w-full min-w-[540px]"
            data-tab-for="order"
            data-page="active"
          >
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                  Car
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  TRANSMISSION
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Price per day
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Status
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      className="w-8 h-8 rounded object-cover block"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                    >
                      Car name
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    3 days
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    $56
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    In progress
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <Dropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Recent Bookings</div>
        </div>
        <form action="" className="flex items-center mb-4">
          {/* <div className="relative w-full mr-2">
            <input
              type="text"
              className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
              placeholder="Search..."
            />
            <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
          </div> 
          <select className="text-sm py-2 pl-4 pr-10 bg-gray-50 border border-gray-100 rounded-md focus:border-blue-500 outline-none appearance-none bg-select-arrow bg-no-repeat bg-[length:16px_16px] bg-[right_16px_center]">
            <option value="">All</option>
          </select>
          */}
        </form>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px]">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                  Car
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Rental Duration
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Price
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Status
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      className="w-8 h-8 rounded object-cover block"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                    >
                      car name
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    3 days
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    $56
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    In progress
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <Dropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
