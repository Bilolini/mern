const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token
            req.user = await User.model.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('User not authorized');
        }
    }

    if(!token){
        res.status(401)
        throw new Error('User not authorized and there is no token');
    }
});

module.exports = {
    protect,
};

// Bearer token