import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { validationRules } from "../validator/validationRules";

export default function AddCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [carImage, setCarImage] = useState(null);
  const onSubmit = async (formData) => {
    const carData = { ...formData, carImage: carImage };
    console.log(carData);
    if (formData) {
      try {
        await axios.post("http://localhost:8000/renter/addCar", carData);
        console.log("Request successful");
      } catch (error) {
        console.error("Error occurred:", error);
      }
    } else {
      console.error("Form has errors, please fix before submitting");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pb-12 lg:1/2 xl:w-1/3 md:mt-12 md:ml-16 w-[70%] mt-6 ml-8">
        <h2 className="text-3xl font-semibold leading-7 text-gray-900">
          Add Your Car Listing
        </h2>
        <p className="mt-1 text-md leading-6 text-gray-600 mb-4">
          Welcome! Ready to share your wheels with eager renters? Fill out the
          form below to add your car to our listings. The more details you
          provide, the better your chances of attracting interested renters.
          Let's get started!
        </p>
        <div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label className="block text-md font-medium leading-6 text-gray-900">
              Car type
            </label>
            <div className="mt-[2px] mb-2">
              <input
                {...register("carType", validationRules.text)}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.carType
                    ? "focus:ring-[#DC143C]"
                    : "focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
              />
              {errors.carType && (
                <span className="text-[#DC143C] text-sm">
                  {errors.carType.message}
                </span>
              )}
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="carModel"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Car model
            </label>
            <div className="mt-[2px] mb-2">
              <input
                {...register("carModel", {
                  ...validationRules.text,
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Must contain only alphabets and number only",
                  },
                })}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.carType
                    ? "focus:ring-[#DC143C]"
                    : "focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
              />
              {errors.carModel && (
                <span className="text-[#DC143C] text-sm">
                  {errors.carModel.message}
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="carImage"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Car image
            </label>
            <div className="mt-[2px] mb-2">
              <input
                type="file"
                {...register("carImage", validationRules.file)}
                onChange={(e) => setCarImage(e.target.files[0])}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.carType
                    ? "focus:ring-[#DC143C]"
                    : "focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
              />
              {errors.carImage && (
                <span className="text-[#DC143C] text-sm">
                  {errors.carImage.message}
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="transmissionType"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Transmission Type
            </label>
            <div className="mt-2 mb-2">
              <select
                {...register(
                  "transmissionType",
                  {
                    required: "Please select an option",
                  },
                  { defaultValue: "Automatic" }
                )}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
              >
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="seatingCapacity"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Seating Capacity
            </label>
            <div className="mt-[2px] mb-2">
              <input
                {...register("seatingCapacity", {
                  ...validationRules.number,
                  minLength: {
                    value: 1,
                    message: "Cannot exceed 2 characters",
                  },
                  maxLength: {
                    value: null,
                  },
                })}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.seatingCapacity
                    ? "focus:ring-[#DC143C]"
                    : "focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
              />
              {errors.seatingCapacity && (
                <span className="text-[#DC143C] text-sm">
                  {errors.seatingCapacity.message}
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="numberOfDoors"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Number of Doors
            </label>
            <div className="mt-[2px] mb-2">
              <input
                {...register("numberOfDoors", {
                  ...validationRules.number,
                  minLength: {
                    value: 1,
                    message: "Cannot exceed 1 characters",
                  },
                })}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.numberOfDoors
                    ? "focus:ring-[#DC143C]"
                    : "focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
              />
              {errors.numberOfDoors && (
                <span className="text-[#DC143C] text-sm">
                  {errors.numberOfDoors.message}
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="airCondition"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Air Condition
            </label>
            <div className="flex flex-col justify-start mt-[2px] mb-2">
              <label>
                <input
                  {...register("airCondition", {
                    required: "This field is required",
                  })}
                  type="radio"
                  value="true"
                />
                <span className="ml-2">Air Conditioning Available</span>
              </label>
              <label>
                <input
                  {...register("airCondition", {
                    required: "This field is required",
                  })}
                  type="radio"
                  value="false"
                />
                <span className="ml-2"> No Air Conditioning</span>
              </label>
            </div>
            <div>
              {errors.airCondition && (
                <span className="text-[#DC143C] text-sm">
                  {errors.airCondition.message}
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="dailyRental"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Daily Rental
            </label>
            <div className="mt-[2px] mb-2">
              <input
                {...register("dailyRental", validationRules.number)}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.dailyRental
                    ? "focus:ring-[#DC143C]"
                    : "focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
              />
              {errors.dailyRental && (
                <span className="text-[#DC143C] text-sm">
                  {errors.dailyRental.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-6 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
