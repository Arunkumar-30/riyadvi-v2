"use client";
import { useState } from "react";
import CommonBannerComponent from "./CommonBanner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  console.log(formData, setFormData);

  return (
    <div>
      <CommonBannerComponent title="Contact Us" banner="/home/banner-2.jpg" />
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-20">
        {/* Contact Info Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-1">Location</h3>
            <p>Krishnapuram, Mylapore, Chennai 600004</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-1">Phone</h3>
            <p>+91 8072487427</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p>info@riyadvisoftwaretechnologies.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h3 className="text-primary text-lg font-medium mb-2 border-l-4 border-blue-600 pl-2">
              Contact Us
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Do you have any questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Click the link below for a free consultation with Mr. Y, your
              coding friend!
            </p>

            <div className="flex items-center gap-4">
              <img
                src="/path-to-image.jpg"
                alt="Mr. Yuvaraj T"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-lg">
                  Mr. Yuvaraj T{" "}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1"
                  >
                    🔗
                  </a>
                </p>
                <p className="text-gray-500">Founder Of Aryu</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <form
            className="bg-[#f5f8fc] p-6 rounded-lg shadow space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // handle form submit here
              alert("Form submitted!");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <select className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a Service</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>UI/UX Design</option>
            </select>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:from-indigo-600 hover:to-blue-600 transition shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.402342220697!2d80.26208697454766!3d13.044829313269599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d1f14f156d%3A0x6737f140561b363d!2sRiyadvi%20Software%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1752063621882!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            className="card"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
