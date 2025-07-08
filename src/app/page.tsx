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
    </div>
  );
}
