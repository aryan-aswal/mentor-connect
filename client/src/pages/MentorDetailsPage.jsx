import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import {
    faHeart as faSolidHeart,
    faQuestionCircle as faSolidQuestionCircle,
} from "@fortawesome/free-solid-svg-icons"; // Import solid icons for wishlist and question
import { fetchMentorDetails } from "../services/operations/MENTOR_API";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

const MentorDetailsPage = () => {
    const { id:mentorId } = useParams();
    //   const mentorData = {
    //     name: "Abhishek Jakhar",
    //     title: "Senior Software Engineer @ Coinbase",
    //     location: "India",
    //     rating: "5.0",
    //     reviews: "75",
    //     lastActive: "Active yesterday",
    //     responseTime: "in half a day",
    //     skills: [
    //       "React",
    //       "HTML",
    //       "CSS",
    //       "JavaScript",
    //       "Web Development",
    //       "Redux",
    //       "Node.js",
    //       "MongoDB",
    //       "Next.js",
    //       "TypeScript",
    //       "Tailwind CSS",
    //     ],
    //     imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    //     price: "200",
    //     description:
    //       "I'm a passionate Frontend Engineer at Coinbase with a deep love for mentoring engineers and guiding them through their professional journeys. With extensive experience in front-end frameworks like React and Next.js, I enjoy sharing my knowledge and helping others excel in their careers.",
    //     languages: ["English", "Hindi"],
    //     career: [
    //       {
    //         date: "October, 2023 - Present",
    //         title: "Quality Assurance Engineer II",
    //         company: "Amazon",
    //       },
    //       {
    //         date: "May, 2022 - October, 2023",
    //         title: "Senior SDET",
    //         company: "Visa Inc.",
    //       },
    //       {
    //         date: "January, 2021 - May, 2022",
    //         title: "Core Member at Product Leadership Forum",
    //         company: "Philips Innovation Campus, Bangalore",
    //       },
    //       {
    //         date: "October, 2020 - May, 2022",
    //         title: "Software Engineer II",
    //         company: "Philips Innovation Campus, Bangalore",
    //       },
    //     ],
    //     education: [
    //       {
    //         degree: "Bachelor of Technology in Computer Science",
    //         university: "Indian Institute of Technology, Delhi",
    //         year: "2016 - 2020",
    //       },
    //       {
    //         degree: "Master of Technology in Software Engineering",
    //         university: "Birla Institute of Technology and Science, Pilani",
    //         year: "2020 - 2022",
    //       },
    //     ],
    //   };

    const convertResponse = (response) => {
        // Extract user info and mentor details from the response
        const { userInfo, mentorDetails } = response;

        // Convert the career entries to the desired format
        const career = mentorDetails.career.map(c => ({
            date: `${new Date(c.startDate).toLocaleString('default', { month: 'long', year: 'numeric' })} - ${new Date(c.endDate).toLocaleString('default', { month: 'long', year: 'numeric' })}`,
            title: c.role,
            company: c.organisation,
        }));

        // Convert the education entries to the desired format
        const education = mentorDetails.education.map(e => ({
            degree: e.course,
            university: e.institute,
            year: `${new Date(e.startDate).getFullYear()} - ${new Date(e.endDate).getFullYear()}`,
        }));

        // Construct the mentor data in the desired format
        return {
            name: userInfo.name,
            title: mentorDetails.currentPosition ? `${mentorDetails.currentPosition} @ ${mentorDetails.currentCompany}` : '',
            location: mentorDetails.location,
            rating: mentorDetails.ratingAndReviews.length > 0 ? (mentorDetails.ratingAndReviews.reduce((acc, review) => acc + review.rating, 0) / mentorDetails.ratingAndReviews.length).toFixed(1) : "No ratings",
            reviews: mentorDetails.ratingAndReviews.length.toString(),
            lastActive: "N/A", // This field is not provided in the response
            responseTime: "N/A", // This field is not provided in the response
            skills: userInfo.skills || [],
            imageUrl: userInfo.imageUrl || "https://via.placeholder.com/300", // Default if image not found
            price: mentorDetails.fees ? mentorDetails.fees.toString() : "N/A",
            description: userInfo.about || "N/A", // Assuming about is the bio
            languages: userInfo.languages || [],
            career,
            education,
            linkedInURL: mentorDetails.linkedInURL
        };
    };

    const [mentorData, setMentorData] = useState({});

    const getMentorDetails = async () => {
        const response = await fetchMentorDetails(mentorId);
        console.log(response);
        const data = convertResponse(response);
        setMentorData(data);
    }

    useEffect(() => {
        getMentorDetails();
    }, [mentorId])

    return (
        <>
            <div className="min-h-screen bg-white">
                {/* Header with blue background */}
                <div className="bg-blue-900 py-8">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-screen-xl px-4">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <img
                                className="w-48 h-48 border-4 border-white shadow-md"
                                src={mentorData.imageUrl}
                                alt="Profile"
                            />
                        </div>
                        {/* Details */}
                        <div className="ml-0 lg:ml-6 mt-4 lg:mt-0 text-center lg:text-left text-white flex-1">
                            <h1 className="text-2xl font-bold">{mentorData.name}</h1>
                            <p className="text-sm mt-2">{mentorData.title}</p>
                            <p className="text-white mt-2 text-base ">
                                Top 1% Mentor | Interview Expert | JavaScript and React Expert |
                                Roadmap | Pair Programming
                            </p>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-4 text-sm text-white">
                                <p>📍 {mentorData.location}</p>
                                <p>
                                    ⭐ {mentorData.rating}{" "}
                                    <a href="#" className="underline">
                                        ({mentorData.reviews} reviews)
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end items-end space-x-4 p-4">
                            <button className="bg-white text-blue-900 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 text-sm">
                                <FontAwesomeIcon icon={faSolidHeart} className="mr-2" />
                                Wish List
                            </button>
                            <button className="bg-white text-blue-900 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 text-sm">
                                <FontAwesomeIcon icon={faSolidQuestionCircle} className="mr-2" />
                                Ask a Question
                            </button>
                            <a
                                href="#"
                                className="bg-white text-blue-900 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100"
                            >
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a
                                href={mentorData.linkedInURL}
                                className="bg-white text-blue-900 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <nav className="bg-white shadow-sm p-4">
                    <div className="container mx-auto flex items-center space-x-2 text-gray-600 max-w-screen-xl px-4 text-sm">
                        <a href="#" className="hover:underline">
                            Find a Mentor
                        </a>
                        <span>&gt;</span>
                        <a href="#" className="hover:underline">
                            {mentorData.name}
                        </a>
                    </div>
                </nav>

                {/* Main Content Section */}
                <div className="container mx-auto mt-8 flex flex-col lg:flex-row lg:space-x-8 max-w-screen-xl px-4">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3">
                        {/* About Section */}

                        <div className="bg-white p-8 rounded-md shadow-md mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800">About</h2>
                            <p className="mt-4 text-lg text-gray-600">{mentorData.description}</p>

                            {/* Languages I Speak Section */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Languages I Speak</h3>
                                <ul className="list-disc list-inside mt-2 text-lg text-gray-600">
                                    {mentorData?.languages?.map((language, index) => (
                                        <li key={index}>{language}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-white p-8 rounded-md shadow-md mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {mentorData?.skills?.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Career Journey Section */}
                        <div className="bg-white p-8 rounded-md shadow-md mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Career Journey
                            </h2>
                            <ul className="mt-4 space-y-4">
                                {mentorData?.career?.map((job, index) => (
                                    <li key={index} className="text-base text-gray-600">
                                        <p>
                                            <strong>{job.date}</strong>
                                        </p>
                                        <p>{job.title}</p>
                                        <p>{job.company}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Education Section */}
                        <div className="bg-white p-8 rounded-md shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                            <ul className="mt-4 space-y-4">
                                {mentorData?.education?.map((edu, index) => (
                                    <li key={index} className="text-base text-gray-600">
                                        <p>
                                            <strong>{edu.degree}</strong>
                                        </p>
                                        <p>{edu.university}</p>
                                        <p>{edu.year}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Section (Mentorship Plan - Sticky) */}
                    <div className="w-full lg:w-1/3">
                        <div className="lg:sticky lg:top-20 bg-white p-8 rounded-md shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 text-center">
                                ${mentorData.price} / <span className="text-xl">month</span>
                            </h2>
                            <p className="text-base text-gray-600 mt-2">
                                Video calls, pair programming, code reviews, interview practice &
                                unlimited chat on Slack.
                            </p>
                            <ul className="mt-6 text-gray-600 space-y-4">
                                <li className="flex items-center space-x-2 text-base">
                                    <span>💬</span>
                                    <span>Unlimited Q&A via chat</span>
                                </li>
                                <li className="flex items-center space-x-2 text-base">
                                    <span>⏰</span>
                                    <span>Expect responses in 24 hours or less</span>
                                </li>
                                <li className="flex items-center space-x-2 text-base">
                                    <span>💼</span>
                                    <span>Hands-on support</span>
                                </li>
                            </ul>
                            <div className="text-center mt-8">
                                <Link to={'https://calendly.com/nishithdwivedi10/mentoring-session?month=2024-09'}>
                                    <button className="bg-green-500 text-white py-2 px-5 rounded-lg w-full hover:bg-green-600 text-xl">
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default MentorDetailsPage;