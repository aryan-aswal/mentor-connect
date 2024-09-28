const OTP = require('../model/OTP');
const User = require('../model/User');
const Mentor = require('../model/Mentor');
const Mentee = require('../model/Mentee');
const Profile = require('../model/Profile')
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { mailSender } = require('../utils/mailSender');
const { passwordUpdated } = require('../mails/passwordUpdate');

require('dotenv').config();


const sendotp = async(req, res ) => {
    try {
        const { email } = req.body;

        // Check whether user is already registered
        const isUserPresent = await User.findOne({ email });

        if (isUserPresent) {
            return res.status(401).json({
                success: false,
                message: "User already registered"
            });
        }

        // Generate OTP
        let otp;
        do {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });
            var result = await OTP.findOne({ otp });
        } while (result);

        // Save OTP in the database
        const otpPayload = { email, otp };
        await OTP.create(otpPayload);

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp
        });
    } catch (error) {
        console.log("Error while sending OTP", error.message);
        res.status(501).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

const signup = async(req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, otp, userType } = req.body;

        console.log(firstName, lastName, email, password, confirmPassword, otp, userType);


        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp || !userType) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password are different",
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registered"
            });
        }

        const recentOtp = await OTP.findOne({ email }).sort({ createdAt: -1 });
        if (!recentOtp || otp !== recentOtp.otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            userType,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        res.status(200).json({
            success: true,
            message: "User is registered successfully",
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "User cannot be registered, please try again later!"
        });
    }
}

const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "All fields are required, please try again",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered, please sign up first",
            });
        }

        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                userType: user.userType,
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            user.token = token;
            user.password = undefined;

            res.cookie("token", token, { expire: Date.now() + 3 * 24 * 60 * 60 * 1000 }).status(200).json({
                success: true,
                token,
                user,
                message: "Logged in successfully",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Password is incorrect",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Login failure, please try again",
        });
    }
}

const changePassword = async (req, res) => {
    try {
        const userDetails = await User.findById(req.user.id);
        const { oldPassword, newPassword, confirmPassword } = req.body;

        const isPasswordMatch = await bcrypt.compare(oldPassword, userDetails.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, message: "The password is incorrect" });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: "The password and confirm password do not match" });
        }

        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        await User.findByIdAndUpdate(req.user.id, { password: encryptedPassword }, { new: true });

        try {
            await mailSender(
                userDetails.email,
                "Password Updated",
                passwordUpdated(userDetails.email, `Password updated successfully for ${userDetails.firstName} ${userDetails.lastName}`)
            );
        } catch (error) {
            console.error("Error occurred while sending email:", error);
            return res.status(500).json({ success: false, message: "Error occurred while sending email", error: error.message });
        }

        return res.status(200).json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        console.error("Error occurred while updating password:", error);
        return res.status(500).json({ success: false, message: "Error occurred while updating password", error: error.message });
    }
}

module.exports = { sendotp, signup, login, changePassword }