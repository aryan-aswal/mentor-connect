const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: Date,  // Store date as Date object
    },
    about: {  // This is the bio
        type: String,
        trim: true,
    },
    contactNumber: {
        type: String,
        trim: true,
    },
    skills: {  // This will be multiple tags
        type: [String],
        default: [],
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor"
    },
    mentee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentee",
    },
    userType: {
        type: String,
        required: true,
        enum: ["Mentor", "Mentee"],  // Determines if the user is a mentor or mentee
    },
    token: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
    image: {
        type: String,
        required: true,
    },
    languages: {
        type: [String],
        default: [],
    },
})

module.exports = mongoose.model("User", userSchema);

