import CommonBannerComponent from "@/components/ui-section/CommonBanner";

const About = () => {
  return (
    <>
      {/* Banner Section */}
      <div>
        <CommonBannerComponent title="About Us" banner="/home/banner-2.jpg" />
      </div>

      {/* Meet the Founder Section */}

      <div className="bg-[#fff] py-16">
        <div className="w-[85%] mx-auto flex justify-between gap-y-6 py-16 max-md:flex-col">
          {/* Founder Text Content */}
          <div className="md:w-[50%] flex flex-col justify-center mt-8 md:mt-0">
            <h2 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold leading-snug">
              About
            </h2>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] mt-6 leading-relaxed">
              Yuvaraj, the heart and soul behind Aryu Enterprises, brings
              together a unique blend of expertise and passion. With over 15
              years of experience in technology services, branding, and
              marketing, Yuvaraj founded Aryu Enterprises to address the
              challenges he witnessed in the industry.
              <br />
              <span>
                His journey, driven by a desire for meaningful change, inspired
                the "Client First" mantra—ensuring innovation, branding
                excellence, and genuine client partnerships.
              </span>
              <br />
              <span>
                His journey, driven by a desire for meaningful change, inspired
                the "Client First" mantra—ensuring innovation, branding
                excellence, and genuine client partnerships.
              </span>
            </p>
          </div>
          {/* Founder Image */}
          <div className="md:w-[40%] md:h-[450px] max-md:mx-auto overflow-hidden rounded-4xl">
            <img
              alt="Mr. Yuvaraj, founder of Aryu Enterprises, leading innovation and growth in the industry."
              className="w-full h-full object-cover duration-400 hover:scale-110 transition-transform"
              src="/home/dev.webp"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fff] py-16">
        <div className="w-[85%] mx-auto flex justify-between gap-y-6 py-16 max-md:flex-col">
          {/* Founder Image */}
          <div className="md:w-[40%] md:h-[450px] max-md:mx-auto overflow-hidden rounded-4xl">
            <img
              alt="Mr. Yuvaraj, founder of Aryu Enterprises, leading innovation and growth in the industry."
              className="w-full h-full object-cover duration-400 hover:scale-110 transition-transform"
              src="/home/dev.webp"
            />
          </div>

          {/* Founder Text Content */}
          <div className="md:w-[50%] flex flex-col justify-center mt-8 md:mt-0">
            <h2 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold leading-snug">
              Meet the Founder
            </h2>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] mt-6 leading-relaxed">
              Yuvaraj, the heart and soul behind Aryu Enterprises, brings
              together a unique blend of expertise and passion. With over 15
              years of experience in technology services, branding, and
              marketing, Yuvaraj founded Aryu Enterprises to address the
              challenges he witnessed in the industry.
              <br />
              <br />
              <span>
                His journey, driven by a desire for meaningful change, inspired
                the "Client First" mantra—ensuring innovation, branding
                excellence, and genuine client partnerships.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] lg:w-[80%]">
          <div className="mt-5 relative w-full h-fit overflow-hidden">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center bg-contact-background bg-clip-text p-5 font-bold">
              Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 p-2">
            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                100+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🫶</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Clients</p>
            </div>

            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                15+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🌎</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Years in the Market</p>
            </div>

            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                150+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🫂</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Team Members</p>
            </div>

            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                200+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#161C52] mb-12">
          Our Vision & Mission
        </h2>

        <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">👁️</span>
              <h3 className="text-2xl font-semibold text-[#161C52]">
                Our Vision
              </h3>
            </div>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] leading-relaxed">
              To become a global leader in digital transformation by empowering
              businesses with innovative solutions, creative strategies, and a
              commitment to excellence.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col  justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-semibold text-[#161C52]">
                Our Mission
              </h3>
            </div>

            <p className="text-[#484A61] text-[18px] max-md:text-[14px] leading-relaxed mt-6 text-center">
              To deliver impactful digital solutions with a client-first
              mindset, fostering long-term growth, innovation, and reliable
              partnerships worldwide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
