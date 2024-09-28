import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t mt-10">
      <div className="container mx-auto px-32">
        {/* Top section with Logo and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="flex flex-col items-start">
            {/* Logo and company name */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40" // Add your logo URL here
                alt="MentorCruise Logo"
                className="h-10 w-auto mr-4"
              />
              <span className="text-2xl font-bold text-blue-800">
              MentorConnect
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 max-w-md">
              Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.
            </p>

            {/* Social media icons */}
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <i className="fab fa-x-twitter"></i> {/* X/Twitter Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>

          {/* Footer Menu Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 lg:mt-0">
            {/* Platform Section */}
            <div>
              <h4 className="font-bold text-gray-800">PLATFORM</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Browse Mentors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Book a Session
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Become a Mentor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Mentorship for Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="font-bold text-gray-800">RESOURCES</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Books
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Career Paths
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h4 className="font-bold text-gray-800">COMPANY</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Partner Program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    DMCA
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h4 className="font-bold text-gray-800">SUPPORT</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Collections Section */}
            <div>
              <h4 className="font-bold text-gray-800">COLLECTIONS</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Groups
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-800">
                    Fractional Executives
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-4 mt-4 text-center text-gray-600 text-sm ">
          © 2024 MentorConnect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;