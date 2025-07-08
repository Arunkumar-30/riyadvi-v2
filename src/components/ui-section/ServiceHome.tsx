"use client";

import HeadingComponent from "./Heading";

const ServiceHome = () => {
  return (
    <>
      <HeadingComponent
        heading="Grow your business with expert product development! We offer IT solutions and digital services to help you succeed."
        description="Discover Our Services"
      />

      <div className="flex justify-center mt-10">
        <div className="w-full lg:w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
            {/* Example Card — repeat for each service */}
            {[
              {
                title: "DevOps",
                description: "Quickly Gain DevOps Experience",
                href: "/devops-services-chennai",
                imgSrc: "/dev-service.webp",
              },
              {
                title: "Robotic Process Automation",
                description: "Smart Automation Changes Business",
                href: "/rpa-services-india",
                imgSrc: "/dev-service.webp",
              },
              {
                title: "VR & AR",
                description: "Build Powerful Virtual Experience",
                href: "/vr-ar-services-india",
                imgSrc: "/dev-service.webp",
              },
              {
                title: "Blockchain Development",
                description: "Secure Transactions on Blockchain",
                href: "/blockchain-development-india",
                imgSrc: "/dev-service.webp",
              },
              {
                title: "Data and Analytics",
                description: "Planned, Informative, and Perceptive",
                href: "/data-analytics-services-chennai",
                imgSrc: "/dev-service.webp",
              },
              {
                title: "Cloud Services",
                description: "Simple, safe, and quick cloud transfer",
                href: "/cloud-services-in-india",
                imgSrc: "/dev-service.webp",
              },
              {
                title: "CRM & ERP",
                description: "Smart automation changes business",
                href: "/crm-and-erp-software-development-services",
                imgSrc: "/dev-service.webp",
              },
              {
                title: "E-Commerce",
                description: "Increase your online visibility",
                href: "/e-commerce-solutions-india",
                imgSrc: "/dev-service.webp",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg w-full cursor-pointer border"
              >
                <a href={item.href} data-discover="true">
                  <div className="w-full h-full border">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                      src={item.imgSrc}
                    />
                  </div>
                  <div className="absolute top-3 left-3 text-white text-sm sm:text-lg 2xl:text-2xl font-bold bg-black bg-opacity-60 px-3 py-1 rounded-md">
                    {item.title}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xs sm:text-base font-light bg-black bg-opacity-70 px-4 py-2 rounded-md opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out text-center">
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceHome;
