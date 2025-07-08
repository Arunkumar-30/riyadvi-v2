import AboutComponent from "@/components/ui-section/About";
import BannerSlider from "@/components/ui-section/Banner";
import ServiceHome from "@/components/ui-section/ServiceHome";
import Testimonials from "@/components/ui-section/Testimonal";
import TrustedPartner from "@/components/ui-section/TrustedPartners";
import WhyChooseUsComponent from "@/components/ui-section/WhyChooseUs";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <BannerSlider></BannerSlider>
      </div>

      <TrustedPartner />
      <ServiceHome />
      <AboutComponent />
      <WhyChooseUsComponent />
      <Testimonials />
      <div>
        <div
          className="bg-[#fff] bg-cover bg-center bg-no-repeat text-white py-16 px-6"
          style={{
            backgroundImage: `url('/home/banner-2.jpg')`,
          }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-[90%] sm:w-[60%]">
              <p className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold text-white">
                Ready to Grow Your Business? <br /> Get Started with Aryu Today!
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 w-full mt-10">
                <Link
                  href="/contact-us"
                  className="bg-white text-[#004CAB] px-6 py-2 rounded-lg w-full sm:w-auto hover:bg-black/30 hover:text-white transition-all duration-500 text-[18px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
