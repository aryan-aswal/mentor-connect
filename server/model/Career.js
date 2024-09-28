const mongoose = require('mongoose');

// Embedded schema for Career
const careerSchema = new mongoose.Schema({
    // mentor: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Mentor"
    // },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    organisation: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model("Career", careerSchema);