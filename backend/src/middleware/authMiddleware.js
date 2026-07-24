const jwt = require("jsonwebtoken");

const authenticate = (req,res,next) => {
    try{
        // Get authorization header
        const authHeader = req.headers.authorization;

        // Check authorization header
        if(!authHeader){
            return res.status(401).json({
                success: false,
                message: "Authorization token is missing."
            });
        }

        // Check header format
        const token = authHeader.split(" ")[1];

        if (!token || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: "Invalid authorization format.",
            });
        }

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next()

    }
    catch(error){
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};

module.exports = authenticate;