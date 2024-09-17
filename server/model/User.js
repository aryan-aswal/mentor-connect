const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
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
        accountType: {
            type: String,
            required: true,
            enum: ["Mentee", "Mentor"], // include admin if required
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile"
        },
        Mentor: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        token: {
            type: String,
        },
        resetPasswordExpires: {
            type: Date,
        },
        image: {
            type: String,
            required: true,
        }
    }, 
    { timestamps: true }
)
module.exports = mongoose.model("User", userSchema);

