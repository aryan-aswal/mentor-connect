import React, { useEffect, useState } from 'react';
import FilteringSidebar from '../components/FilterSidebar';
import MentorCard from '../components/MentorCard';
import { fetchAllMentors } from '../services/operations/MENTOR_API';
import Footer from '../components/Footer';

const MentorListPage = () => {
    // State for filters and search
    const [mentors, setMentors] = useState([]);

    const dataFormatter = (response) => {
        return response.map(({ mentorDetails, userDetails }) => {
            return {
                _id: mentorDetails._id,
                name: `${userDetails.firstName} ${userDetails.lastName}`,
                currentPosition: mentorDetails.career[0]?.role || "N/A",
                currentCompany: mentorDetails.career[0]?.organisation || "N/A",
                location: mentorDetails.location || "N/A",
                rating: mentorDetails.ratingAndReviews.length > 0
                    ? (mentorDetails.ratingAndReviews.reduce((acc, review) => acc + review.rating, 0) / mentorDetails.ratingAndReviews.length).toFixed(1)
                    : "No ratings",
                reviews: mentorDetails.ratingAndReviews.length.toString() || "0",
                price: mentorDetails.fees || "N/A",
                tags: userDetails.skills || [],
                bio: userDetails.about || "No bio available",
                imageUrl: userDetails.image || "https://randomuser.me/api/portraits/men/32.jpg",
            };
        });
    };

    const getAllMentorDetails = async () => {
        const response = await fetchAllMentors();
        const data = dataFormatter(response);
        setMentors(data);
    }

    useEffect(() => {
        getAllMentorDetails()
    }, [])

    const [filters, setFilters] = useState({
        skills: [
            { name: 'Mern', selected: false },
            { name: 'CSS', selected: false },
            { name: 'JavaScript', selected: false },
            { name: 'Business Strategy', selected: false },
            { name: 'Career Growth', selected: false },
        ],
        jobTitles: [
            { name: 'Senior Software Engineer', selected: false },
            { name: 'Business Manager', selected: false },
        ],
        companies: [
            { name: 'Coinbase', selected: false },
            { name: 'Uber', selected: false },
            { name: 'Apple', selected: false },
        ],
    });
    const [searchQuery, setSearchQuery] = useState('');

    // Handler to toggle the checkbox selections
    const handleFilterChange = (category, index) => {
        const updatedFilters = { ...filters };
        updatedFilters[category][index].selected = !updatedFilters[category][index].selected;
        setFilters(updatedFilters);
    };

    // Handler for search input change
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    // Function to filter the mentor list based on filters and search query
    const filteredMentors = mentors.filter((mentor) => {
        const matchesSearchQuery = searchQuery
            ? mentor.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
            mentor.currentPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mentor.currentCompany.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        const matchesSkills = filters.skills.some(
            (skill) => skill.selected && mentor?.tags?.includes(skill.name)
        );
        const matchesJobTitles = filters.jobTitles.some(
            (title) => title.selected && mentor?.currentPosition?.includes(title.name)
        );
        const matchesCompanies = filters.companies.some(
            (company) => company.selected && mentor?.currentCompany?.includes(company.name)
        );

        return (
            matchesSearchQuery &&
            (matchesSkills || matchesJobTitles || matchesCompanies || (!filters?.skills?.some(skill => skill.selected) && !filters.jobTitles.some(title => title.selected) && !filters.companies.some(company => company.selected)))
        );
    });

    return (
        <>
            <div className="flex justify-center min-h-screen bg-gray-100">
                <div className=' max-w-[1400px] mx-auto'> {/* Increased max width */}
                    <div className="w-full flex gap-20">
                        {/* Sidebar */}
                        <div className="w-1/4"> {/* Adjust width as needed */}
                            <FilteringSidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                searchQuery={searchQuery}
                                onSearchChange={handleSearchChange}
                            />
                        </div>

                        {/* Mentor Cards */}
                        <div className="flex-1 p-4">
                            {filteredMentors.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> {/* Adjusted grid columns */}
                                    {filteredMentors.map((mentor, index) => (
                                        <MentorCard key={index} mentor={mentor} />
                                    ))}
                                </div>
                            ) : (
                                <p>No mentors found matching your criteria.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
export default MentorListPage;