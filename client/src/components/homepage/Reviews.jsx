import React, { useState } from 'react';

const reviews = [
    {
        id: 1,
        text: "I am incredibly grateful for the assistance and guidance provided by Kashish in refining my resume. His deep understanding of the industry and a keen eye for detail helped me present my skills and...",
        name: "Arundhati Lohakare",
        avatarColor: "bg-orange-500",
    },
    {
        id: 2,
        text: "The session was very inspiring, and I gained a lot of insight into the silly mistakes I have been making when sitting for job interviews. Abhishek sir also helped me with a mock interview...",
        name: "Satyam Agarwal",
        avatarColor: "bg-purple-500",
    },
    {
        id: 3,
        text: "One of the best consulting sessions I ever had! Thank you, Rishika, for covering all my queries in a very well-structured manner, I truly loved the way you were patiently listening to all of my...",
        name: "Trisha Parekh",
        avatarColor: "bg-red-500",
    },
    {
        id: 4,
        text: "I had the incredible opportunity to be mentored by an exceptional individual who exceeded all my expectations. Their unwavering support, genuine passion, and deep expertise created a...",
        name: "Sonu Kumar",
        avatarColor: "bg-pink-500",
    },
    {
        id: 5,
        text: "Thanks to the wonderful guidance I received, my job search became more focused and productive...",
        name: "Ravi Kumar",
        avatarColor: "bg-green-500",
    },
    {
        id: 6,
        text: "The mentoring sessions have been life-changing. I gained a lot of confidence and skills...",
        name: "Neha Singh",
        avatarColor: "bg-blue-500",
    },
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < reviews.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <>
            <div className="px-32 py-8 bg-white mt-24">
                <h2 className="text-4xl font-bold text-blue-800 mb-4">Mentee <span className="text-blue-600">Reviews</span></h2>
                <p className="text-gray-600 mb-8">Read real stories from mentees about their transformative journey.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reviews.slice(currentIndex, currentIndex + itemsPerPage).map((review) => (
                        <div key={review.id} className="bg-white p-4 rounded-lg shadow-lg h-[250px] flex flex-col justify-between">
                            <div className="overflow-hidden">
                                <span className="text-yellow-500 text-5xl">“</span>
                                <p className="text-gray-700 mt-1 line-clamp-3">{review.text}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className={`w-8 h-8 rounded-full ${review.avatarColor} flex items-center justify-center text-white text-sm font-bold`}>
                                    {review.name.charAt(0)}
                                </div>
                                <p className="ml-2 text-gray-800 text-sm font-semibold">{review.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8 mb-24">
                <button
                    onClick={handlePrevious}
                    className="bg-blue-600 text-white px-3 py-1 rounded-l-lg hover:bg-blue-700 disabled:bg-gray-300"
                    disabled={currentIndex === 0}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-3 py-1 rounded-r-lg hover:bg-blue-700 disabled:bg-gray-300 ml-2"
                    disabled={currentIndex + itemsPerPage >= reviews.length}
                >
                    Next
                </button>
            </div>
        </>

    );
};

export default Reviews;