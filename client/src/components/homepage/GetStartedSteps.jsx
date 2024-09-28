import React from 'react';

const GetStartedSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Find Your Ideal Mentor",
      description:
        "Browse from 600+ vetted mentors and get to choose your ideal mentor according to your preferences and aspirations.",
      buttonLabel: "Find Your Mentor",
      buttonLink: "#",
    },
    {
      id: 2,
      title: "Book a FREE webinar",
      description:
        "Connect with a mentor and see how the mentor will help you achieve your goal faster & avoid asking for referrals, etc.",
      buttonLabel: "Book a FREE Trial",
      buttonLink: "#",
    },
    {
      id: 3,
      title: "Start 1:1 Mentorship",
      description:
        "Bravo! Get started with your personalized mentorship in the right direction with a mentor of your choice.",
      buttonLabel: "Start Preparing",
      buttonLink: "#",
    },
  ];

  return (
    <section className="bg-white py-8 mt-20">
      <div className="container mx-auto px-32">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Get Started in 3 Easy Steps
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Follow these three simple steps to get started with Long Term Mentorship
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0"> {/* Removed gaps */}
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border rounded-lg p-4 text-center mx-2 transition-transform duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105" // Added hover effects
            >
              <div className="inline-block bg-blue-600 text-white rounded-full p-2 mb-2 text-base w-10 h-10 flex items-center justify-center">
                {step.id}
              </div>

              <h3 className="text-lg font-bold mb-3">{step.title}</h3>

              <p className="text-gray-500 mb-4 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;