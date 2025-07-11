"use client";
import { useState } from "react";

export default function ContactComponent() {
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
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-[#D4AF37] font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
              Lead Magnet Section
            </h2>
            <h1 className="text-black font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              Free Business Audit Report
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Looking for expert product development and IT solutions? We create
              smart, scalable digital solutions to help businesses grow. From
              AI-driven automation to seamless web development, we’ve got you
              covered. Contact us today and let’s drive your success forward!
            </p>
          </div>

          {/* Right Section - Form */}
          <form
            className="bg-white p-6 rounded-lg shadow-lg space-y-4"
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
              className="w-full py-3 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-white font-semibold hover:from-indigo-600 hover:to-blue-600 transition shadow-md"
            >
              Get My Free Bussiness Audit Report
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
