import React from "react";

const employees = [
  {
    name: "John Doe",
    role: "Software Developer",
    company: "Google",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description:
      "Experienced in full-stack development and cloud computing, working on scalable applications.",
    experience: [
      { year: "2021 - Present", position: "Software Developer", company: "Google" },
      { year: "2019 - 2021", position: "Frontend Developer", company: "Google" },
    ],
  },
  {
    name: "Sophia Lee",
    role: "AI Research Scientist",
    company: "Google",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description:
      "Specialized in AI, deep learning, and NLP, contributing to cutting-edge research at Google AI.",
    experience: [
      { year: "2022 - Present", position: "AI Research Scientist", company: "Google AI" },
      { year: "2020 - 2022", position: "Machine Learning Engineer", company: "Google Cloud" },
    ],
  },
  {
    name: "David Miller",
    role: "Cloud Engineer",
    company: "Google",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description:
      "Expert in cloud computing, DevOps, and infrastructure automation on Google Cloud Platform.",
    experience: [
      { year: "2019 - Present", position: "Cloud Engineer", company: "Google Cloud" },
      { year: "2017 - 2019", position: "Site Reliability Engineer", company: "Google" },
    ],
  },
];

const EmployeeCard = () => {
  return (
    <div className="flex justify-center flex-wrap gap-6 p-6 bg-gray-900">
      {employees.map((employee, index) => (
        <div
          key={index}
          className="w-80 p-6 rounded-2xl bg-gray-800 shadow-lg text-center text-white"
        >
          {/* Company Logo */}
          <div className="mb-4">
            <img
              src={employee.companyLogo}
              alt={`${employee.company} Logo`}
              className="w-16 h-16 mx-auto"
            />
          </div>

          {/* Employee Details */}
          <h2 className="text-xl font-bold">{employee.name}</h2>
          <h4 className="text-blue-400">{employee.role} at {employee.company}</h4>
          <p className="text-gray-300 mt-2">{employee.description}</p>

          {/* Work Experience */}
          <div className="text-left mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Work Experience:</h3>
            <ul className="list-none p-0 text-gray-300">
              {employee.experience.map((exp, idx) => (
                <li key={idx} className="mb-2 text-sm">
                  <strong>{exp.year}</strong>: {exp.position} at {exp.company}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
