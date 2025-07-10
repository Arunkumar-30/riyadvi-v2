"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadingComponent from "./Heading";

type CaseStudy = {
  title: string;
  category: string;
  imageUrl: string;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Avinsaa",
    category: "Wooden Toys",
    imageUrl:
      "https://backoffice.aryuacademy.com/image/technology_images/1741934677_5.png",
    href: "/avinsaa",
  },
  {
    title: "Jadoo",
    category: "Online Directory",
    imageUrl:
      "https://backoffice.aryuacademy.com/image/technology_images/1741934664_4.png",
    href: "/jadoo",
  },
  {
    title: "Biokosmetik of Texas",
    category: "Skincare",
    imageUrl:
      "https://backoffice.aryuacademy.com/image/technology_images/1741934643_3.png",
    href: "/biokosmetik",
  },
  {
    title: "Seibert Consulting",
    category: "IT Consulting & ERP Solutions",
    imageUrl:
      "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
    href: "/seibert",
  },
  {
    title: "Seibert Consulting",
    category: "IT Consulting & ERP Solutions",
    imageUrl:
      "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
    href: "/seibert",
  },
  {
    title: "Seibert Consulting",
    category: "IT Consulting & ERP Solutions",
    imageUrl:
      "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
    href: "/seibert",
  },
  {
    title: "Seibert Consulting",
    category: "IT Consulting & ERP Solutions",
    imageUrl:
      "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
    href: "/seibert",
  },
];

export default function CaseStudies() {
  return (
    <div className="lg:mt-20">
      <HeadingComponent
        heading="Case Studies"
        description="Discover How We Solve Challenges."
      />
      <div className="flex flex-col items-center px-4 lg:px-8 py-12 bg-white">
        <div className="w-full lg:w-[90%]">
          <Swiper
            modules={[FreeMode, Autoplay]}
            slidesPerView="auto"
            loop={true}
            freeMode={true}
            mousewheel={{ releaseOnEdges: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            initialSlide={0}
            className="swiper-container"
          >
            {caseStudies.map((study, idx) => (
              <SwiperSlide
                key={study.href + idx}
                className="flex justify-center"
              >
                <a
                  href={study.href}
                  className="flex flex-col max-w-[300px] p-4 transition-transform hover:scale-105 duration-300 "
                >
                  <div className="overflow-hidden rounded-md shadow-md ">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-[300px] sm:h-[380px] object-cover transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-bold text-gray-800">
                      {study.title}
                    </p>
                    <p className="text-xs text-gray-600 font-bold border border-gray-300 px-3 py-1 rounded-full inline-block mt-2">
                      {study.category}
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
