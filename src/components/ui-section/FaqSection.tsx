// "use client";

// import { useState } from "react";

// interface FAQ {
//   question: string;
//   answer: string;
// }

// const faqs: FAQ[] = [
//   {
//     question: "What types of websites do you specialize in?",
//     answer:
//       "We specialize in business, e-commerce, portfolio, and custom web applications tailored to your needs.",
//   },
//   {
//     question: "How long does it take to develop a website?",
//     answer:
//       "It typically takes 2-6 weeks depending on the project's complexity and content readiness.",
//   },
//   {
//     question: "How do you ensure the security of my website?",
//     answer:
//       "We follow best practices including HTTPS, secure authentication, and regular vulnerability assessments.",
//   },
//   {
//     question: "What sets Aryu Technologies apart from other agencies?",
//     answer:
//       "Our attention to detail, transparent process, and long-term support distinguish us from the rest.",
//   },
//   {
//     question: "Will my website be mobile-friendly?",
//     answer:
//       "Absolutely. All our websites are fully responsive and optimized for mobile devices.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="FAQ" className="px-4 py-16 bg-gray-50">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-10">
//           FAQ
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-blue-300 rounded-lg p-5 bg-white shadow-sm transition"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="flex items-center justify-between w-full text-left"
//               >
//                 <span className="text-lg font-semibold text-gray-800">
//                   {faq.question}
//                 </span>
//                 <svg
//                   className={`w-5 h-5 text-blue-500 transform transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={`mt-3 text-gray-600 text-sm transition-all duration-300 overflow-hidden ${
//                   openIndex === index
//                     ? "max-h-40 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 {faq.answer}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How secure is my insurance information?",
    answer:
      "Your insurance data is encrypted and stored securely, ensuring complete confidentiality and protection against breaches.",
  },
  {
    question: "How can I customize my insurance coverage?",
    answer:
      "You can personalize your plan during purchase or renewal by choosing add-ons or adjusting the coverage amount.",
  },
  {
    question: "Is there a waiting period for insurance claims?",
    answer:
      "Yes, most policies include a waiting period before you can file claims. This varies depending on the coverage type.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 ">
        {/* Left Side - Heading */}
        <div>
          <h4 className="text-lg font-medium text-gray-600 mb-2">
            Insurance FAQ
          </h4>
          <h2 className="text-4xl font-extrabold">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* Right Side - Questions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200 pt-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
