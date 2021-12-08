const jwt = require("jsonwebtoken");
const { UnauthError } = require("../errors");
require("dotenv").config();
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthError("No Token Provided");
  }

  const token = authHeader.split(" ")[1];
  console.log(authHeader);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = {id,username}
    next()
  } catch (err) {
      throw new UnauthError('Not authorized to access this route')  
    }
};


module.exports = authMiddleware;