import AboutComponent from "@/components/ui-section/About";
import BannerSlider from "@/components/ui-section/Banner";
import CaseStudies from "@/components/ui-section/CaseStudies";
import ServiceHome from "@/components/ui-section/ServiceHome";
import TestimonialSlider from "@/components/ui-section/Testimonal";
import Testimonials from "@/components/ui-section/Testimonal";
import TrustedPartner from "@/components/ui-section/TrustedPartners";
import WhyChooseUsComponent from "@/components/ui-section/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <div>
        <BannerSlider></BannerSlider>
      </div>

      <TrustedPartner />
      <ServiceHome />
      <AboutComponent />
      {/* <WhyChooseUsComponent /> */}
      <CaseStudies />
      <Testimonials />
    </div>
  );
}
