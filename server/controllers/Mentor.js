const Mentor = require('../model/Mentor');
const Career = require('../model/Career');
const Education = require('../model/Education');
const User = require('../model/User');
const RatingAndReview = require('../model/RatingAndReview'); // Add 

const createMentor = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            userId, // Add userId to the request body to update the User document
            gender, dateOfBirth, contactNumber, skills, category, location,
            languages, bio, linkedInURL, personalWebsite, career, education,
        } = req.body;

        // Log received data for debugging
        console.log("Received data:", {
            gender, dateOfBirth, contactNumber, skills, category, location,
            languages, bio, linkedInURL, personalWebsite, career, education,
        });

        // Validate required fields if necessary
        if (!category || !linkedInURL || !gender || !dateOfBirth || !skills.length || !category|| !languages.length || !bio || !career.length || !education.length) {
            return res.status(400).json({
                success: false,
                message: "Category, currentPosition, currentCompany, linkedInURL, and fees are required fields."
            });
        }

        // Create Career entries
        const careerEntries = await Promise.all(
            career.map(async (c) => {
                return await Career.create({
                    startDate: c.startDate,
                    endDate: c.endDate,
                    organisation: c.organisation,
                    role: c.role,
                });
            })
        );

        // Create Education entries
        const educationEntries = await Promise.all(
            education.map(async (e) => {
                return await Education.create({
                    startDate: e.startDate,
                    endDate: e.endDate,
                    institute: e.institute,
                    course: e.course,
                });
            })
        );
        // Create a new mentor record
        const newMentor = new Mentor({
            category,
            location,
            linkedInURL,
            personalWebsite,
            career: careerEntries.map(entry => entry._id), // Reference the created Career documents
            education: educationEntries.map(entry => entry._id), // Reference the created Education documents
        });
        // Save the mentor record to the database
        const savedMentor = await newMentor.save();
        await User.findByIdAndUpdate(req.user.id, {           
            skills: skills || [], // Ensure skills is an array
            languages: languages || [], // Ensure languages is an array
            gender,
            dateOfBirth,
            contactNumber,
            about: bio,
            mentor: savedMentor._id,
        })

        // Update the User document with the new mentor's ID
        if (userId) {
            await User.findByIdAndUpdate(userId, { mentor: savedMentor._id });
        }

        res.status(201).json({
            success: true,
            message: "Mentor information saved successfully",
            mentor: savedMentor
        });
    } catch (error) {
        console.error("Error while creating mentor:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const fetchMentorDetails = async (req, res) => {
    try {
        const { mentorId } = req.query;
        console.log("This is ", req.query);

        const mentor = await Mentor.findById(mentorId)
            .populate('career')  // Populate career references
            .populate('education')  // Populate education references
            .populate({
                path: 'ratingAndReviews', // Populate reviews and mentee details
                populate: {
                    path: 'mentee',  // Populate mentee info for each review
                }
            });

        // Check if mentor exists
        if (!mentor) {
            return res.status(404).json({
                success: false,
                message: "Mentor not found"
            });
        }

        // Fetch associated user details
        const user = await User.findOne({ mentor: mentorId })

        // Return mentor details along with associated user information
        res.status(200).json({
            success: true,
            mentor: {
                userInfo: {
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    contactNumber: user.contactNumber,
                    imageUrl: user.image,
                    languages: user.languages,
                    skills: user.skills,
                    about: user.about,
                    contactNumber: user.contactNumber,
                    gender: user.gender,
                    dateOfBirth: user.dateOfBirth
                },
                mentorDetails: {
                    category: mentor.category,
                    location: mentor.location,
                    linkedInURL: mentor.linkedInURL,
                    personalWebsite: mentor.personalWebsite,
                    currentPosition: mentor.currentPosition,
                    currentCompany: mentor.currentCompany,
                    fees: mentor.fees,
                    ratingAndReviews: mentor.ratingAndReviews,
                    career: mentor.career,  // Array of career entries
                    education: mentor.education,  // Array of education entries
                },
            },
        });
    } catch (error) {
        console.error("Error while fetching mentor details:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const fetchAllMentors = async (req, res) => {
    try {
        // Fetch all mentors from the Mentor collection
        const mentors = await Mentor.find()
            .populate('career') // Populate the related career fields
            .populate('education') // Populate the related education fields
            .populate('ratingAndReviews') // Populate ratings and reviews, if any
            .exec();

        if (!mentors.length) {
            return res.status(404).json({
                success: false,
                message: "No mentors found",
            });
        }

        // Array to store mentors with their corresponding user details
        const mentorsWithUserDetails = [];

        // Loop through each mentor and find the corresponding user
        for (const mentor of mentors) {
            // Find the user associated with this mentor using the mentor._id
            const user = await User.findOne({ mentor: mentor._id }).exec();

            if (user) {
                // Combine the mentor data with the user data
                mentorsWithUserDetails.push({
                    mentorDetails: mentor, // Mentor-specific details
                    userDetails: {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        gender: user.gender,
                        dateOfBirth: user.dateOfBirth,
                        contactNumber: user.contactNumber,
                        skills: user.skills, // From the User model
                        languages: user.languages, // From the User model
                        image: user.image, // From the User model
                        about: user.about
                    }
                });
            }
        }

        console.log(mentorsWithUserDetails);
        // Return the list of mentors along with their user details
        res.status(200).json({
            success: true,
            data: mentorsWithUserDetails
        });

    } catch (error) {
        console.error("Error fetching mentors:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

module.exports = { createMentor, fetchMentorDetails, fetchAllMentors };
