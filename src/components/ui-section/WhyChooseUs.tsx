"use client";

import HeadingComponent from "./Heading";

const WhyChooseUsComponent = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 mt-10">
        <HeadingComponent
          heading="Why Choose Us?"
          description="The Best Solutions For Your Business Needs."
        />
      </div>

      <div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-8 w-full lg:w-[80%] mt-5 lg:mt-10">
            {/* Card 1 */}
            <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    alt="expert-team"
                    className="h-full w-full"
                    src="/gif/gif-1.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    Skilled IT Professionals
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    Our experienced developers, designers, and strategists bring
                    your software vision to life.
                  </p>
                </div>
              </div>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </div>

            {/* Card 2 */}
            <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    alt="flexibility"
                    className="h-full w-full"
                    src="/gif/gif-2.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    Scalable Engagement
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    Whether you need a single engineer or a full team, we scale
                    based on your project’s needs.
                  </p>
                </div>
              </div>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </div>

            {/* Card 3 */}
            <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-left">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    alt="timely-delivery"
                    className="h-full w-full"
                    src="/gif/gif-3.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    Timely Project Launch
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    Our teams are deployment-ready and ensure timely delivery
                    without compromising quality.
                  </p>
                </div>
              </div>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </div>

            {/* Card 4 */}
            <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-right">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    alt="global-delivery"
                    className="h-full w-full"
                    src="/gif/gif-4.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    Global Collaboration
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    Work seamlessly with our distributed teams, ensuring agile,
                    borderless development support.
                  </p>
                </div>
              </div>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUsComponent;
