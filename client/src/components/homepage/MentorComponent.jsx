import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import becomeMentor from '../../assets/becomeMentor.svg';

const MentorComponent = () => {
    const {token} = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="flex items-center justify-between h-[75vh] bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center lg:justify-between">
                {/* Left Section */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        <span className='text-cyan-700'>Become a Mentor</span> <br />& Guide Unstoppable Talent!
                    </h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        Join the community of 2000+ mentors & empower future leaders.
                    </p>

                    <Link to={token && user?.userType == 'Mentor' ? `/apply-for-mentor` : `signup`}>
                        <button className="bg-teal-700 text-white text-lg py-2 px-4 rounded-full hover:bg-teal-800">
                            Be a Mentor
                        </button>
                    </Link>
                </div>

                {/* Right Section - Random Image */}
                <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
                    <img
                        src={becomeMentor}
                        alt="Mentorship"
                        className="w-full rounded-lg h-[60%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default MentorComponent;