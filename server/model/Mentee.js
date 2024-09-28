const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
    Mentors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
    }],
    goal: {
        type: String,
    }
},{ timestamps: true }
)

module.exports = mongoose.model("Mentee", menteeSchema);