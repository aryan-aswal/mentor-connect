const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
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
    institute: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Education', educationSchema);