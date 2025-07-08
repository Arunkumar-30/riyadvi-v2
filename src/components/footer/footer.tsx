"use client";

import Link from "next/link";

const FooterComponent = () => {
  return (
    <>
      <div className="pt-16 pb-10 bg-gradient-to-t from-white to-[#f3f3f3] shadow-2xl drop-shadow-lg">
        <div className="FooterMenu flex justify-between max-lg:flex-wrap gap-10 mx-auto w-[85%]">
          <div className="text-[#292929] w-[320px] text-[18px]">
            <Link href="/" data-discover="true">
              {/* <img className="w-44 md:w-44" alt="Aryu Enterprises Logo" loading="lazy" src="/assets/AryuEnterprises-NalIqy2K.svg"> */}
            </Link>
            <p className="mt-4 text-[16px]">
              Aryu Enterprises, a leading digital transformation company in
              India, provides 360 digital solutions to help businesses
              streamline operations, enhance scalability, and drive long-term
              success.
            </p>
            <ul className="text-[#292929] flex gap-4 pt-4 pb-4">
              <li className="p-2 text-[18px]">
                <Link
                  href="https://x.com/AryuEnterprises"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-x-twitter"></i>
                </Link>
              </li>
              <li className="p-2 text-[18px]">
                <Link
                  href="https://www.instagram.com/aryu_enterprises/"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="p-2 text-[18px]">
                <Link
                  href="https://www.facebook.com/AryuEnterprisesPrivatelimited/"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li className="p-2 text-[18px]">
                <Link
                  href="https://in.linkedin.com/company/aryu-enterprises-private-limited?trk=similar-pages"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[18px] text-[#292929]">Business</h3>
            <ul className="text-[16px] text-[#292929]">
              <li className="my-4">
                <Link href="https://aryutechnologies.com/" target="_blank">
                  Aryu Technologies
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://aryu.agency/" target="_blank">
                  Aryu Agency
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://aryuacademy.com/" target="_blank">
                  Aryu Academy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[18px] text-[#292929]">Company</h3>
            <ul className="text-[16px] text-[#292929]">
              <li className="my-4">
                <Link href="/">Home</Link>
              </li>
              <li className="my-4">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="my-4">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="my-4">
                <Link
                  href="https://aryutechnologies.com/career-opportunities"
                  target="_blank"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[18px] text-[#292929]">Resources</h3>
            <ul className="text-[16px] text-[#292929]">
              <li className="my-4">
                <Link href="https://blog.aryutechnologies.com/" target="_blank">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-[#292929] text-[18px] w-[320px]">
            <h3 className="font-bold">Contact us</h3>
            <ul className="text-[16px]">
              <h4 className="font-semibold mt-2 mb-1">
                For Business Enquiries
              </h4>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="tel:+91 9994715106"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-phone"></i>
                  </span>
                  +91 9994715106
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="mailto:yuvaraj@aryuenterprises.com"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  yuvaraj@aryuenterprises.com
                </Link>
              </li>
              <h4 className="font-semibold mt-2 mb-1">
                For Careers & Job Applications
              </h4>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="tel:+91 6380249209"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-phone"></i>
                  </span>
                  +91 6380249209
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="mailto:hr@aryuenterprises.com"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  hr@aryuenterprises.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
