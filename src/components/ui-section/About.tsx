"use client";

const AboutComponent = () => {
  return (
    <>
      <div className="my-10 lg:ml-20">
        <div className="about-aryu-group flex w-[80%] justify-between md:py-16 mx-auto max-lg:w-[80%] max-lg:flex-col max-lg:gap-10">
          <div className="content lg:w-[60%] flex flex-col justify-between">
            <div>
              <h2 className=" text-[12px] font-bold uppercase text-gray-500 inline-flex items-center  p-2 ">
                About Aryu Group of Companies
              </h2>

              <h3 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold mt-2 md:leading-12">
                We help you enjoy the progress, not just the success.
              </h3>

              <div className="text-[#484A61] max-md:text-[14px] text-[18px] mt-6">
                With us, you can have steady, predictable and long-lasting
                success. In the meantime you will enjoy the process of growing
                visibly.
                <ul className="list-disc ml-10 mt-4 flex flex-col gap-2">
                  <li>Real-time results across 100+ brands</li>
                  <li>Deep understanding of your business &amp; audience</li>
                  <li>Strong focus on retention</li>
                </ul>
              </div>
            </div>

            <div className="max-md:mt-5">
              <a
                className="group duration-500 hover:text-[#fff] p-2 hover:bg-[#5891E0] w-[160px] flex items-center gap-4 text-[#161C52] text-[14px] border-none"
                href="/about-us"
                data-discover="true"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#fff] md:p-1 w-[18px] h-[18px] md:w-[32px] md:h-[32px] group-hover:bg-[#5891E010] bg-[#5891E0] transition-transform duration-300 group-hover:rotate-43 group-hover:translate-x-0.5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                </svg>
                ABOUT ARYU
              </a>
            </div>
          </div>

          <div className="lg:w-[30%] mx-auto text-[#484A61]">
            <div className="w-[100%] grid grid-cols-2 lg:grid-cols-1 gap-4 flex-wrap justify-between max-md:justify-center">
              <div>
                <span className="text-[32px] md:text-[54px] text-[#5790E1]">
                  90%
                </span>
                <p className="text-[14px] font-bold">Returning Client Rate</p>
              </div>
              <div>
                <span className="text-[32px] md:text-[54px] text-[#5790E1]">
                  99%
                </span>
                <p className="text-[14px] font-bold">Project Success Rate</p>
              </div>
              <div>
                <span className="text-[32px] md:text-[54px] text-[#5790E1]">
                  95%
                </span>
                <p className="text-[14px] font-bold">
                  Employee Fulfillment Rate
                </p>
              </div>
              <div>
                <span className="text-[32px] md:text-[54px] text-[#5790E1]">
                  20+
                </span>
                <p className="text-[14px] font-bold">
                  Clients Across the World
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutComponent;
