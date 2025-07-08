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
                    alt="user"
                    className="h-full w-full"
                    src="/assets/user-B_n-Qfpd.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    Expert Team
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    A skilled team, ready to design and build exceptional
                    software solutions.
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
                    alt="diversity"
                    className="h-full w-full"
                    src="/assets/diversity-C5O51ouZ.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    Flexible Solutions
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    We adapt if you need one developer or a full team.
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
                    alt="hourglass"
                    className="h-full w-full"
                    src="/assets/hourglass-DM9x-Zja.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    The Right Time
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    Teams are ready to start anytime and grow with your business
                    needs.
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
                    alt="earth"
                    className="h-full w-full"
                    src="/assets/earth-DCxRidTi.gif"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
                    The Right Place
                  </h2>
                  <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
                    Skilled experts are available online, ensuring smooth and
                    easy collaboration.
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
