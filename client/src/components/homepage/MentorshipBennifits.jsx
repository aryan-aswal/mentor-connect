import React from 'react';
import { FaVideo, FaComments, FaClipboardList, FaClock, FaRocket, FaCertificate } from 'react-icons/fa'; // FontAwesome Icons

const MentorshipBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaVideo />,
      title: "1:1 Live Session",
      description:
        "Never question your progress with frequent One on One session.",
    },
    {
      id: 2,
      icon: <FaComments />,
      title: "Unlimited Chat with Mentor",
      description:
        "Doubt? Get the right advice from your mentor via Chat.",
    },
    {
      id: 3,
      icon: <FaClipboardList />,
      title: "Task & Curated Resources",
      description:
        "Yes! You will be certified for this mentorship program.",
    },
    {
      id: 4,
      icon: <FaClock />,
      title: "Regular Followups",
      description:
        "Stay motivated and consistent with regular follow-ups.",
    },
    {
      id: 5,
      icon: <FaRocket />,
      title: "Job Referrals",
      description:
        "Get Referrals from mentor community to top product and service based companies.",
    },
    {
      id: 6,
      icon: <FaCertificate />,
      title: "Certified",
      description:
        "Yes! You will be certified for this mentorship program.",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-32">
        <h2 className="text-3xl font-semibold text-center mb-4">
          No Need to Struggle Alone Anymore
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Long term mentorship gets fully covered
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3"> {/* Removed gap */}
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white border rounded-lg p-4 text-center transition-transform duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105"
            >
              <div className="inline-block bg-red-600 text-white rounded-full p-2 mb-2 text-base w-10 h-10 flex items-center justify-center">
                {benefit.icon} {/* Displaying the icons */}
              </div>

              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>

              <p className="text-gray-500 mb-4 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipBenefits;