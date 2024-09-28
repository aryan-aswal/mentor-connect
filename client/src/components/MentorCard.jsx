import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MentorCard = ({ mentor }) => {
  // const mentor = {
  //   name: "Abhishek Jakhar",
  //   currentPosition: "Senior Software Engineer",
  //   currentCompany: "Coinbase",
  //   location: "India",
  //   rating: "5.0",
  //   reviews: "75",
  //   fees: "200",
  //   skills: ["React", "HTML", "CSS", "Web Development", "JavaScript", "Interview"],
  //   bio: "I'm a passionate Frontend Engineer at Coinbase with a deep love for mentoring engineers and guiding them through their professional journeys.",
  //   imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  // };

  console.log(mentor);

  const dataFormatter = (mentor) => {
    return {
      _id: mentor._id,
      name: mentor.name, // Direct mapping of name
      currentPosition: mentor.currentPosition, // Direct mapping of position
      currentCompany: mentor.currentCompany, // Direct mapping of company
      location: mentor.location, // Direct mapping of location
      rating: mentor.rating, // Direct mapping of rating
      reviews: mentor.reviews, // Direct mapping of reviews
      fees: mentor.price !== "N/A" ? mentor.price : "N/A", // Mapping price to fees (use default if "N/A")
      skills: mentor.tags || [], // Mapping tags to skills
      bio: mentor.bio, // Direct mapping of bio
      imageUrl: mentor.imageUrl // Direct mapping of imageUrl
    };
  };

  const [mentorData, setMentorData] = useState({});

  useEffect(() => {
    const mentorData = dataFormatter(mentor);
    setMentorData(mentorData);
  }, [])

  return (
    <div className="max-w-sm w-full rounded-lg border border-gray-200 shadow-lg p-4 bg-white mb-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          <img src={mentorData.imageUrl} alt={mentorData.name} className="w-20 h-20 rounded-md mr-4" />
          <div>
            <h3 className="text-lg font-bold">{mentorData.name}</h3>
            <p className="text-sm text-gray-500">{mentorData.currentPosition} at {mentorData.currentCompany}</p>
            <p className="text-xs text-gray-400">{mentorData.location}</p>
          </div>
        </div>
        <div className="flex items-center text-yellow-500 mb-4">
          <span className="text-lg mr-1">{mentorData.rating}</span> ★
          <p className="ml-2 text-gray-500">({mentorData.reviews} reviews)</p>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          {
            mentorData?.bio?.length > 120 ?
              (`${mentorData?.bio?.substring(0, 120)}...`)
              :
              (`${mentorData?.bio}`)
          }
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {mentorData?.skills?.slice(0, 8).map((tag, index) => (
            <span key={index} className="text-xs bg-gray-200 rounded-full px-2 py-1 text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">${mentorData.price}/month</p>
        <Link to={`/mentor/${mentorData._id}`}>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 text-sm">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MentorCard;