const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    about: { //this is the bio 
        type: String,
        trim: true,
    },
    contactNumber: {
        type: String,
        trim: true,
    },
    skills: { //this will the mutipal tags
        type: [String],
        default: null,
    },
    career: [{ //
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }],
    education: [{
        date: {
            type: Date,
            required: true,
        },
        Institute: {
            type: String,
            required: true,
        },
        Course: {
            type: String,
            required: true,
        }
    }],
    location: {
        type: String,
    },
    language: {
        type: [String],
    },
    category: {
        type: String,
        enum: ["Mental Health Specialist", "Engineering and Data", "UX and design", "Business and Management", "Product and Marketing"],
        default: null,
    }
});
module.exports = mongoose.model("Profile", profileSchema);