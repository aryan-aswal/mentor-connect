const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    date: {
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
})


module.exports = mongoose.model("Career", careerSchema);