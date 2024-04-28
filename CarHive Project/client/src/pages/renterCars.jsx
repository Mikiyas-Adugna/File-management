import React from "react";
import Dropdown from "../component/dropdown";
import { NavLink } from "react-router-dom";
export default function renterCars() {
  return (
    <div className="md:mt-12 md:ml-16">
      <div class="p-5">
        <h1 class="text-3xl font-semibold mb-8">All Cars</h1>
        <div>
          <NavLink
            to="/addCar"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-lg hover:opacity-70 cursor-pointer shadow"
          >
            Add car
          </NavLink>
        </div>
        <div class="overflow-auto rounded-lg shadow hidden md:block mt-6">
          <table class="w-full">
            <thead class="bg-gray-200 border-b-2 border-gray-200">
              <tr>
                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Car
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Type
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Model
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Transmission
                </th>
                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Capacity
                </th>
                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Doors
                </th>
                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Air Condition
                </th>
                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Mileage
                </th>
                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Daily Rental Rate
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" class="font-bold text-blue-500 hover:underline">
                    10001
                  </a>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Kring New Fit office chair, mesh + PU, black
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Delivered
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  $200.00
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" class="font-bold text-blue-500 hover:underline">
                    10001
                  </a>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Kring New Fit office chair, mesh + PU, black
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Delivered
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  $200.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-6">
          <div class="bg-white space-y-3 p-4 rounded-lg shadow">
            <div class="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" class="text-blue-500 font-bold hover:underline">
                  #1000
                </a>
              </div>
              <div class="text-gray-500">10/10/2021</div>
              <div>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
              </div>
            </div>
            <div class="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div class="text-sm font-medium text-black">$200.00</div>
            <div class="text-sm font-medium text-black">$200.00</div>
            <div class="text-sm font-medium text-black">$200.00</div>
            <div class="text-sm font-medium text-black">$200.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
