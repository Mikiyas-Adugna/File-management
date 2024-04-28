import React from "react";

export default function header() {
  return (
    <section id="stats" className="py-24 bg-gray-100">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl mb-6 font-bold text-center">
          Advanced Statistics
        </h2>
        <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
    </section>
  );
}
