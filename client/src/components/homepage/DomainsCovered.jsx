import React from 'react';
import { FaLaptopCode, FaDatabase, FaServer, FaCloud, FaChartLine, FaRobot, FaBullhorn, FaShoppingCart, FaBusinessTime, FaMoneyBill, FaProjectDiagram, FaPalette, FaTasks, FaCogs } from 'react-icons/fa';

const DomainsCovered = () => {
  const domains = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-blue-500" />, // Colored icon
      title: "Frontend Developer",
      mentors: "Browse 27+ Mentors",
    },
    {
      id: 2,
      icon: <FaDatabase className="text-purple-500" />,
      title: "Backend Developer",
      mentors: "Browse 120+ Mentors",
    },
    {
      id: 3,
      icon: <FaServer className="text-green-500" />,
      title: "Fullstack Developer",
      mentors: "Browse 86+ Mentors",
    },
    {
      id: 4,
      icon: <FaCloud className="text-indigo-500" />,
      title: "DevOps / SRE",
      mentors: "Browse 22+ Mentors",
    },
    {
      id: 5,
      icon: <FaChartLine className="text-teal-500" />,
      title: "Data Analyst",
      mentors: "Browse 17+ Mentors",
    },
    {
      id: 6,
      icon: <FaRobot className="text-red-500" />,
      title: "AI / ML",
      mentors: "Browse 48+ Mentors",
    },
    {
      id: 7,
      icon: <FaBullhorn className="text-orange-500" />,
      title: "Marketing",
      mentors: "Browse 13+ Mentors",
    },
    {
      id: 8,
      icon: <FaShoppingCart className="text-yellow-500" />,
      title: "Sales",
      mentors: "Browse 10+ Mentors",
    },
    {
      id: 9,
      icon: <FaBusinessTime className="text-blue-500" />,
      title: "Business Analyst",
      mentors: "Browse 27+ Mentors",
    },
    {
      id: 10,
      icon: <FaMoneyBill className="text-green-500" />,
      title: "Finance",
      mentors: "Browse 6+ Mentors",
    },
    {
      id: 11,
      icon: <FaProjectDiagram className="text-purple-500" />,
      title: "Product Manager",
      mentors: "Browse 32+ Mentors",
    },
    {
      id: 12,
      icon: <FaPalette className="text-pink-500" />,
      title: "UI/UX Designer",
      mentors: "Browse 4+ Mentors",
    },
    {
      id: 13,
      icon: <FaTasks className="text-red-500" />,
      title: "Project Manager",
      mentors: "Browse 11+ Mentors",
    },
    {
      id: 14,
      icon: <FaCogs className="text-indigo-500" />,
      title: "Program Manager",
      mentors: "Browse 11+ Mentors",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-32 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Every Domain Every Industry Covered
        </h2>
        <p className="text-gray-500 mb-8">
          Our mentors are equipped to guide you in any field you're passionate about
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 justify-center"> {/* Centered grid */}
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white border rounded-lg py-4 px-6 text-left flex items-center gap-2 justify-start transition-transform duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105" // Centered content, colored icons, reduced height
            >
              <div className="text-2xl mr-4"> {/* Larger and colored icons */}
                {domain.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{domain.title}</h3>
                <p className="text-gray-500 text-sm">{domain.mentors}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsCovered;