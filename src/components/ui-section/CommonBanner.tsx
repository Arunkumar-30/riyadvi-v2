"use client";

import React, { FC } from "react";
import Image from "next/image";

interface BannerProps {
  title: string;
  banner: string;
}

const CommonBannerComponent: FC<BannerProps> = ({ title, banner }) => {
  return (
    <div className="relative w-full lg:h-[300px] h-[100px] m-auto">
      <div className="absolute inset-0 bg-black/10 flex justify-center items-center p-4">
        <div className=" space-y-5 w-full max-w-7xl text-center sm:text-center">
          <h1 className="lg:text-white text-3xl sm:text-5xl font-bold ">
            {title}
          </h1>
        </div>
      </div>
      <div className="">
        <Image
          width={1920}
          height={420}
          src={banner}
          className="w-full h-[200px] sm:h-[300px] object-cover"
          alt="Slide 1"
        />
      </div>
    </div>
  );
};

export default CommonBannerComponent;
