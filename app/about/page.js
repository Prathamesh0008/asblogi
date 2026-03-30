"use client";
import { useState } from "react";
import {
  FaUsers,
  FaAward,
  FaGlobeAmericas,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
  FaLeaf,
  FaRocket,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function About() {
  const [expandedValue, setExpandedValue] = useState(null);

  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology for smarter logistics.",
      moreInfo:
        "Our innovation lab continuously researches emerging technologies including AI route optimization, blockchain for supply chain transparency, and IoT-enabled tracking. We've invested over $10M in R&D and hold 15+ logistics patents.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliability",
      description:
        "Consistent, dependable service you can count on every time.",
      moreInfo:
        "We maintain redundant systems with 99.99% uptime. ISO-certified processes, strict audits, and trained operators ensure dependable execution across all regions.",
    },
    {
      icon: <FaLightbulb />,
      title: "Excellence",
      description:
        "Striving for perfection in every shipment and interaction.",
      moreInfo:
        "Six Sigma methodologies drive our operations with defect rates below 0.1%. Customer satisfaction exceeds 98% globally.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description:
        "Eco-friendly solutions for a greener supply chain.",
      moreInfo:
        "40% carbon reduction through EV fleets, optimized routing, and LEED-certified warehouses. Carbon-neutral goal by 2025.",
    },
  ];

  const toggleValue = (index) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 -mt-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900/70 font-medium">
            Core <span className="text-[#FF8F00]">Values</span> That Drive Us
          </h2>

          <p className="text-gray-600/70 text-lg max-w-3xl mx-auto font-light font-medium">
            These principles guide every decision we make and every service we deliver.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {values.map((value, index) => {
            const isOpen = expandedValue === index;

            return (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#E65100] shadow-xl"
                    : "border-gray-200 hover:border-[#E65100]/50 hover:shadow-xl"
                }`}
              >
                {/* TOP BAR */}
                <div className="h-1 bg-gradient-to-r from-[#E65100] to-[#FFD700]" />

                <div className="p-8 flex flex-col h-full">
                  {/* ICON - Enhanced with gradient, hover effects, and scaling */}
                  <button
                    onClick={() => toggleValue(index)}
                    className="self-start"
                  >
                    <div
                      className={`inline-flex p-4 rounded-xl text-3xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                        isOpen
                          ? "bg-gradient-to-br from-[#E65100] to-[#FFD700] text-white shadow-md"
                          : "bg-gradient-to-br from-[#E65100]/20 to-[#FFD700]/20 text-[#E65100] hover:from-[#E65100]/30 hover:to-[#FFD700]/30"
                      }`}
                    >
                      {value.icon}
                    </div>
                  </button>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">
                    {value.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 mb-4">{value.description}</p>

                  {/* EXPANDABLE CONTENT */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {value.moreInfo}
                      </p>
                    </div>
                  </div>

                  {/* ACTION */}
                  <button
                    onClick={() => toggleValue(index)}
                    className="mt-4 inline-flex items-center text-[#E65100] font-semibold transition-colors hover:text-[#FF8F00]"
                  >
                    {isOpen ? (
                      <>
                        <FaChevronUp className="mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        Learn More
                        <FiArrowRight className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}