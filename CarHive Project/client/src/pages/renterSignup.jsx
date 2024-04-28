import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { validationRules } from "../validator/validationRules";
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [profile, setProfile] = useState(null);
  const onSubmit = async (formData) => {
    const renterData = { ...formData, companyProfile: profile };
    console.log(renterData);
    if (renterData) {
      try {
        await axios.post("http://localhost:8000/renter/register", renterData);
        console.log("Request successful");
      } catch (errors) {
        console.log("error occurred:", errors);
      }
    } else {
      console.error("Form has errors, please fix before submitting");
    }
  };

  return (
    <div className="h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[120px] w-auto"
            src="../public/logo.png"
            alt="Your Company"
          />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to carHive
          </h2>
        </div>

        <div className="mt-[20px] sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  {...register("name", validationRules.text)}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.name
                      ? "focus:ring-[#DC143C]"
                      : "focus:ring-indigo-600"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
                />
                {errors.name && (
                  <span className="text-[#DC143C] text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Company name
              </label>
              <div className="mt-2">
                <input
                  {...register("companyName", validationRules.text, {
                    pattern: {
                      value: /^[A-Za-z0-9]+$/,
                      message: "Must contain only alphabets and number only",
                    },
                  })}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.companyName
                      ? "focus:ring-[#DC143C]"
                      : "focus:ring-indigo-600"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
                />
                {errors.companyName && (
                  <span className="text-[#DC143C] text-sm">
                    {errors.companyName.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", validationRules.email)}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.email
                      ? "focus:ring-[#DC143C]"
                      : "focus:ring-indigo-600"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
                />
                {errors.email && (
                  <span className="text-[#DC143C] text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  {...register("password", validationRules.password)}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.password
                      ? "focus:ring-[#DC143C]"
                      : "focus:ring-indigo-600"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
                />
                {errors.password && (
                  <span className="text-[#DC143C] text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Phone
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("phone", validationRules.phone)}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.phone
                      ? "focus:ring-[#DC143C]"
                      : "focus:ring-indigo-600"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
                />
                {errors.phone && (
                  <span className="text-[#DC143C] text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Address
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("address", {
                    ...validationRules.text,
                    pattern: {
                      value: /^[A-Za-z0-9 ]+$/,
                      message: "Must contain only alphabets and number only",
                    },
                  })}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.address
                      ? "focus:ring-[#DC143C]"
                      : "focus:ring-indigo-600"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
                />
                {errors.address && (
                  <span className="text-[#DC143C] text-sm">
                    {errors.address.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Company Profile
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="file"
                  {...register("companyProfile", validationRules.file)}
                  onChange={(e) => setProfile(e.target.files[0])}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.companyProfile
                      ? "focus:ring-[#DC143C]"
                      : "focus:ring-indigo-600"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-md sm:leading-6`}
                />
                {errors.companyProfile && (
                  <span className="text-[#DC143C] text-sm">
                    {errors.companyProfile.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account
            <NavLink
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}