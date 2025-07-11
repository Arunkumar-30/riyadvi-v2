// "use client";

// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { FaQuoteRight } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Deep Kakkad",
//     feedback:
//       "Great people to work with. They do awesome work for web-development.",
//   },
//   {
//     name: "Pradeep Subramani",
//     feedback:
//       "Aryu Enterprises delivered top-notch solutions with great support highly recommended!",
//   },
//   {
//     name: "Andy Pierre",
//     feedback: "Very professional. Great customer service. Excellent work.",
//   },
//   {
//     name: "Aaron Sakhai",
//     feedback:
//       "A very talented, family-owned, web development company. Would gladly work with again.",
//   },
// ];

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="w-[90%] mx-auto flex justify-around items-center max-md:flex-col max-md:gap-8">
//         {/* Left Text */}
//         <div className="w-full md:w-[40%]">
//           <h2 className="text-[12px] font-bold uppercase text-[#D4AF37] inline-flex items-center p-2">
//             Testimonials
//           </h2>

//           <h3 className="text-black text-[44px] max-md:text-[28px] font-semibold mt-2 md:leading-12">
//             What Our <span className="text-[#D4AF37]">Clients</span> Say
//           </h3>
//         </div>

//         {/* Swiper Slider */}
//         <div className="w-full md:w-[40%] max-md:mt-6">
//           <div className="h-[500px] w-full flex justify-center items-center">
//             <Swiper
//               direction="vertical"
//               slidesPerView={3}
//               spaceBetween={30}
//               loop
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               modules={[Autoplay]}
//               onSlideChange={(swiper) => {
//                 setActiveIndex(swiper.realIndex);
//               }}
//               className="w-full h-full"
//             >
//               {testimonials.map((item, idx) => {
//                 const isActive = idx === activeIndex % testimonials.length;
//                 return (
//                   <SwiperSlide
//                     key={idx}
//                     className="flex justify-center items-center"
//                   >
//                     <div
//                       className={`w-[350px] p-5 flex transition-all duration-300 ease-in-out bg-white text-[#484A61] border ${
//                         isActive
//                           ? "ml-0 opacity-100 border-l-[20px] border-yellow-900"
//                           : "ml-[100px] opacity-50 border-l-[20px] border-gray-300"
//                       }`}
//                     >
//                       <div className="flex flex-col gap-2">
//                         <span className="text-[18px] font-semibold">
//                           {item.name}
//                         </span>
//                         <p className="text-[16px]">{item.feedback}</p>
//                       </div>
//                       <div className="text-yellow-900 w-[32px] ml-auto">
//                         <FaQuoteRight size={32} />
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  return (
    <div className="max-w-7xl mx-auto p-8 py-16">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-4">
          <p className="text-[16px] font-bold uppercase text-[#D4AF37]">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold text-black">
            What Our Clients Say
          </h2>
        </div>
      </div>

      <div className="mt-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={24}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
