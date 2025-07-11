import BannerSlider from "@/components/ui-section/Banner";
import CaseStudies from "@/components/ui-section/CaseStudies";
import ContactComponent from "@/components/ui-section/ContactSection";

import ServiceComponent from "@/components/ui-section/ServiceSection";
import TestimonialSlider from "@/components/ui-section/Testimonal";

import TrustedPartner from "@/components/ui-section/TrustedPartners";
import WhyChooseUs from "@/components/ui-section/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <div>
        <BannerSlider></BannerSlider>
      </div>

      <TrustedPartner />
      <ServiceComponent />
      {/* <ServiceHome /> */}
      {/* <AboutComponent /> */}
      {/* <WhyChooseUsComponent /> */}
      <WhyChooseUs />
      <ContactComponent />
      <CaseStudies />
      <TestimonialSlider />
    </div>
  );
}
