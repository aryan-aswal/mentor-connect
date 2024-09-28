import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  homeImage  from '../../assets/heroBannerImage.jpg';

const MentorGuidance = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="flex flex-col items-center min-h-[75vh] bg-white p-12">
            <div className="w-full max-w-7xl bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Section: Text and Buttons */}
                <div className="flex flex-col justify-center p-10">
                    {/* Header */}
                    <h1 className="text-5xl font-bold mb-6">
                        Supercharge your career with Mentorship
                    </h1>
                    <p className="text-gray-700 mb-8 text-lg">
                        Land your dream job, role, and company faster than ever with 1:1
                        long term mentorship.
                    </p>

                    {/* Button Section */}
                    <div className="flex gap-6">
                        {/* Find a Mentor Button */}
                        <Link to={'/mentors'}>
                            <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 text-lg">
                                Find a Mentor
                            </button>
                        </Link>


                        {/* Be a Mentor Button */}
                        <Link to={token && user?.userType == 'Mentor' ? `/apply-for-mentor` : `signup`}>
                            <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 text-lg">
                                Be a Mentor
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="flex items-center justify-center p-10">
                    {/* Placeholder Image */}
                    <img
                        src={homeImage}
                        alt="Placeholder"
                        className="rounded-lg w-full max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default MentorGuidance;