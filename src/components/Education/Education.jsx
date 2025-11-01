import React from "react";
import { education } from "../../constants"; // Import education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education journey, learning experiences, and achievements
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-3 sm:left-1/2 w-[3px] bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex mb-16 relative 
              ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}
            `}
          >
            {/* Timeline Dot / Logo */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg bg-gray-800">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 
                ml-12 sm:ml-0 
                ${index % 2 === 0 ? "sm:mr-44" : "sm:ml-44"}
                transform transition-transform duration-300 hover:scale-105
              `}
            >
              {/* Logo + Details */}
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-4 text-purple-300 font-semibold">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
