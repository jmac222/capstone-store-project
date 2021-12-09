require("dotenv").config();

const jwt = require("jsonwebtoken");
const { UnauthError } = require("../error");

const authError = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        throw new UnauthError("Not authorized to access this part of the site.");
    }

    const token = authHeader.split(" ")[1];
    console.log(authHeader)
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userID: payload.userID, name: payload.name };
        next();
    } catch (err) {
        throw new UnauthError("Authorization invalid");
    }
};

module.exports = authError;