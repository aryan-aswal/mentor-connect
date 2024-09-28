import React from 'react';
import { Link } from 'react-router-dom';

const CompletionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-500 h-12 w-12 rounded-full flex items-center justify-center">
            {/* Replace the below with your logo or icon */}
            <span className="text-white font-bold text-2xl">A</span>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Thanks for applying as a mentor!
        </h1>
        <p className="text-gray-600 mb-6">
          We will review your application and get back to you as soon as possible. Generally, you should hear from us <span className="font-bold">within 5-10 working days.</span>
        </p>
        <p className="text-gray-600 mb-6">
          You will receive an email at your registered address with next steps.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">What's next?</h2>
        <p className="text-gray-600 mb-4">
          If you are eager, take the time between now and then and plan out your future steps as a mentor. This is not mandatory, but can help you hit the ground running.
        </p>
        <ul className="text-left text-indigo-600 mb-6">
          <li className="mb-2">
            <a href="#mentoring-guides" className="underline">Read our mentoring guides</a>
          </li>
          <li className="mb-2">
            <a href="#newsletter" className="underline">Sign up to the newsletter</a>
          </li>
          <li className="mb-2">
            <a href="#mentors-inspiration" className="underline">Check out other mentors for inspiration</a>
          </li>
        </ul>
        <Link to={'/'}>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompletionPage;