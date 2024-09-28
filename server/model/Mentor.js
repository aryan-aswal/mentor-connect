const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    Mentees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentee",
    }],
    Mentors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor"
    }],
    career: [{ 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Career",
    }],
    education: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Education"
    }],
    location: {
        type: String,
    },
    category: {
        type: String,
        enum: ["Mental Health Specialist", "Engineering and Data", "UX and design", "Business and Management", "Product and Marketing"],
        default: null,
    },
    linkedInURL: {
        type: String,
        required: true,
    },
    personalWebsite: {
        type: String,
    },
    ratingAndReviews: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "RatingAndReview"
    }],
    currentPosition: {
        type: String,
    },
    currentCompany: {
        type: String,
    },
    fees: {
        type: Number,
    },
},{ timestamps: true }
)

module.exports = mongoose.model("Mentor", mentorSchema);