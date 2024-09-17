import React from "react";

const MentorshipPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Mentor Introduction Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex items-center">
          <div className="w-1/3">
            {/* Mentor Card */}
            <div className="border border-gray-200 p-4 rounded-lg">
              <img
                className="w-16 h-16 rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Mentor Avatar"
              />
              <h3 className="text-center font-semibold mt-2">Benjamin Kaiser</h3>
              <p className="text-center text-sm text-gray-500">
                Principal Software Engineer
              </p>
              <div className="text-center mt-4">
                <p className="font-semibold">$240/month</p>
              </div>
              <ul className="mt-4">
                <li className="text-center py-2 border-t">Mentorship</li>
                <li className="text-center py-2 border-t">Intro Session</li>
                <li className="text-center py-2 border-t">CV Review</li>
                <li className="text-center py-2 border-t">Expert Session</li>
              </ul>
            </div>
          </div>

          <div className="w-2/3 pl-8">
            {/* Description Section */}
            <h2 className="text-2xl font-bold mb-4">
              At your fingertips: a dedicated career coach
            </h2>
            <p className="text-gray-600 mb-4">
              Want to start a new dream career? Successfully build your startup?
              Itching to learn high-demand skills? Work smart with an online
              mentor by your side to offer expert advice and guidance to match
              your zeal. Become unstoppable using MentorCruise.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-gray-600">
              <li>Thousands of mentors available</li>
              <li>Flexible program structures</li>
              <li>Free trial</li>
              <li>Personal chats</li>
              <li>1-on-1 calls</li>
              <li>96% satisfaction rate</li>
            </ul>
            <button className="bg-green-500 text-white mt-6 px-6 py-3 rounded-lg">
              Find a mentor →
            </button>
          </div>
        </div>
      </div>

      {/* Explore Mentors Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Explore 5,200+ available mentors</h3>
        <div className="grid grid-cols-4 gap-8">
          {/* Mentor Category Card */}
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              className="w-16 h-16 mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Tech Mentor"
            />
            <h4 className="font-semibold">Tech Mentors</h4>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              className="w-16 h-16 mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Career Mentors"
            />
            <h4 className="font-semibold">Career Mentors</h4>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              className="w-16 h-16 mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Product & Startup Mentors"
            />
            <h4 className="font-semibold">Product & Startup Mentors</h4>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              className="w-16 h-16 mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Design Mentors"
            />
            <h4 className="font-semibold">Design Mentors</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;