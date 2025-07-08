"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileNav";

const NavbarComponent = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const route = usePathname();

  const navLink = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },

    {
      href: "#services",
      label: "Services",
      dropdown: [
        { label: "Web Development", href: "/managed-print-service" },
        { label: "App Development", href: "/most-valuable-customer" },
        { label: "Digital Marketing", href: "/av-solutions" },
        { label: "AR & VR", href: "/av-solutions" },
        { label: "3D Modelling", href: "/av-solutions" },
        { label: "Game Development", href: "/av-solutions" },
      ],
    },
    { href: "/our-works", label: "Our Works" },
    { href: "/blogs", label: "Blogs" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <div>
      {/* <div className="bg-[var(--om-nav-top-bg-color)]  h-[38px] w-full">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <Link href={"/om-invents"}>
            <Image
              src={"/logo/image.png"}
              width={300}
              height={50}
              className="h-[32px] my-auto"
              alt="partner brand logo"
            />
          </Link>
        </div>
      </div> */}
      <nav className="bg-white shadow-md z-50 left-0 right-0 py-3">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex">
                <Image
                  src="/logo/riyadvilogo.png"
                  width={100}
                  height={100}
                  className="w-20"
                  alt="Brand Logo"
                />
                <a href="" className="mt-5 text-sm font-semibold">
                  {" "}
                  Riyadvi Software <br /> Technologies PVT LID
                </a>
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden z-50">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex text-lg font-semibold flex-1 ps-5 ms-5 space-x-5">
              {navLink.map((navItem, index) => (
                <div key={index} className="group relative h-full">
                  <Link
                    href={navItem.href}
                    className={`navbar__link py-2 border-b-2 border-b-transparent hover:border-b-black transition duration-300 ${
                      route === navItem.href ||
                      (navItem.href === "#services" &&
                        (route.includes("managed") || route.includes("av")))
                        ? "active border-b-blue-500"
                        : ""
                    }`}
                  >
                    {navItem.label}
                  </Link>

                  {navItem.dropdown && (
                    <div className="absolute z-50 left-1/2 transform p-3 -translate-x-1/2 mt-5 border shadow-2xl bg-white w-60 scale-y-0 origin-top group-hover:scale-y-100 transition-transform flex">
                      <ul className="space-y-1 px-5 ">
                        {navItem.dropdown.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <Link
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-[#00008f] hover:bg-slate-300 py-1 pl-1 pr- rounded-md"
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Extra Links */}
            <div className="hidden text-lg font-semibold flex-1 lg:flex space-x-5 justify-end">
              <Link
                href="/career"
                className={`navbar__link py-5 ${
                  route === "/career" ? "active" : ""
                }`}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className={`navbar__link py-5 ${
                  route === "/contact" ? "active" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <MobileMenu
          navLink={navLink}
          isMobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          route={route}
        />
      </nav>
    </div>
  );
};

export default NavbarComponent;
