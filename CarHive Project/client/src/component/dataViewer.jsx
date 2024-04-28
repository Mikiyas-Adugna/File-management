import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GiCarKey } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa6";
export default function dataViewer() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-start items-center">
            <span className="bg-green-200 p-6 rounded-full mr-4">
              <IoIosCheckmarkCircle className="text-5xl text-green-900" />
            </span>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-semibold">2,345</div>
                <div className="text-md font-medium text-gray-600">
                  Available Cars
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-start items-center">
            <span className="bg-yellow-200 p-6 rounded-full mr-4">
              <GiCarKey className="text-5xl text-yellow-900" />
            </span>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-semibold ">2,345</div>
                <div className="text-md font-medium text-gray-600">
                  Rented Cars
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-start ">
            <span className="bg-blue-200 p-6 rounded-full mr-4">
              <FaCalendarCheck className="text-5xl text-blue-900" />
            </span>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-semibold ">2,345</div>
                <div className="text-md font-medium text-gray-600">
                  Reserved Cars
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
