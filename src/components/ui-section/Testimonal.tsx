"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Deep Kakkad",
    feedback:
      "Great people to work with. They do awesome work for web-development.",
  },
  {
    name: "Pradeep Subramani",
    feedback:
      "Aryu Enterprises delivered top-notch solutions with great support highly recommended!",
  },
  {
    name: "Andy Pierre",
    feedback: "Very professional. Great customer service. Excellent work.",
  },
  {
    name: "Aaron Sakhai",
    feedback:
      "A very talented, family-owned, web development company. Would gladly work with again.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#005F9C0D] py-16 my-20">
      <div className="w-[90%] mx-auto flex justify-around items-center max-md:flex-col max-md:gap-8">
        {/* Left Text */}
        <div className="w-full md:w-[40%]">
          <h2 className="text-[#003368] text-[44px] max-md:text-[28px] font-semibold md:leading-[3.5rem]">
            What Our <br />
            <span className="text-[#0095D2]">Customers</span> Says
          </h2>
          <p className="text-[14px] md:text-[18px] text-[#484A61] mt-2 md:mt-6">
            Testimonials are not just recognitions, but they are the results for
            the work we do.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="w-full md:w-[40%] max-md:mt-6">
          <div className="h-[500px] w-full flex justify-center items-center">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={30}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              className="w-full h-full"
            >
              {testimonials.map((item, idx) => {
                const isActive = idx === activeIndex % testimonials.length;
                return (
                  <SwiperSlide
                    key={idx}
                    className="flex justify-center items-center"
                  >
                    <div
                      className={`w-[350px] p-5 flex transition-all duration-300 ease-in-out bg-white text-[#484A61] border border-[#DEDEDE] ${
                        isActive
                          ? "ml-0 opacity-100 border-l-[20px] border-[#0095D2]"
                          : "ml-[100px] opacity-50 border-l-[20px] border-[#CAEFFF]"
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-[18px] font-semibold">
                          {item.name}
                        </span>
                        <p className="text-[16px]">{item.feedback}</p>
                      </div>
                      <div className="text-[#0095D2] w-[32px] ml-auto">
                        <FaQuoteRight size={32} />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
