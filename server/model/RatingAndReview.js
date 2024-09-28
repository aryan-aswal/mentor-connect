const mongoose = require('mongoose');

const ratingAndReviewSchema = new mongoose.Schema({
    mentee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentee",
        required: true,
    },
    rating: {
        type: Number,
        required:true,
        trim: true,
    },
    review: {
        type: String,
        required: true,
        trim: true,
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
        index: true,
        required: true,
    }
})

module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);