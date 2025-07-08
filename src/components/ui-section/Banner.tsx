"use client";

import React from "react";

const BannerSlider = () => {
  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-start transition-transform duration-700 ease-in-out bg-[url('/home/main.jpg')] bg-cover bg-center h-[500px] w-full px-6 sm:px-12">
          {/* Left-side content */}
          <div className="text-white max-w-md space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Your Bold Headline
            </h1>
            <p className="text-sm sm:text-lg">
              This is a short paragraph describing the hero section. It&apos;s
              clean, responsive, and layered over the background image.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
