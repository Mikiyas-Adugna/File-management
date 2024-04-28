import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { validationRules } from "../validator/validationRules";

export default function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    console.log(formData);

    if (formData) {
      try {
        await axios
          .post("http://localhost:8000/auth/login", formData)
          .then((res) => console.log("Working " + JSON.stringify(res.data)))
          .catch((err) => console.log("not working " + err));
      } catch (error) {
        console.log("error occurred:", errors);
      }
    } else {
      console.error("Form has errors, please fix before submitting");
    }
  };
  return (
    <div className="h-screen">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center bg-gray-100">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-[120px] w-auto"
            src="../public/logo.png"
            alt="Your Company"
          />
          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            welcome back
          </h2>
        </div>

        <div class="mt-[20px] sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} class="space-y-4">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
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
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
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
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
