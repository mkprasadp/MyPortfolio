import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science (AIML)",
      school: "Veltech University",
      duration: "2022 – Present",
    },
    {
      degree: "Intermediate (MPC)",
      school: "Sri Sarada Junior College",
      duration: "2020 – 2022",
    },
    {
      degree: "SSC (10th Standard)",
      school: "Sree Ram High School",
      duration: "2019 – 2020",
    },
  ];

  return (
    <section id="education" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Education 🎓
          </h2>
          <p className="mt-3 text-gray-600">
            My academic journey so far
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                {edu.degree}
              </h3>
              <p className="text-gray-700 mt-1">
                {edu.school}
              </p>
              <span className="text-sm text-gray-500 mt-2 block">
                {edu.duration}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
