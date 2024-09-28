const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = async(req, res, next) => {
    try {
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");
        console.log(token);

        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            })
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "token is invalid",
            })
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong while validating the token",
        })
    }
}

const isMentee = async(req, res, next) => {
    try {
        if(req.user.accountType != "Mentee") {
            return res.status(400).json({
                success: false,
                message: "This is a protected route for Mentee only"
            })
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again",
        })
    }
}


const isMentor = async(req, res, next) => {
    try {
        if(req.user.accountType != "Mentor") {
            return res.status(400).json({
                success: false,
                message: "This is a protected route for Mentor only"
            })
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again",
        })
    }
}

// if at any time admin is required 

// const isAdmin = async(req, res, next) => {
//     try {
//         if(req.user.accountType !== "Admin") {
//             return res.status(400).json({
//                 success: false,
//                 message: "This is a protected route for isAdmin only"
//             })
//         }
//         next();
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "User role cannot be verified, please try again",
//         })
//     }
// }

module.exports = { isMentee, auth, isMentor };