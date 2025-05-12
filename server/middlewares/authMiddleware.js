const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        try {
            let decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decode;
            next()
        } catch (error) {
            res.status(401).json({"message": "Invalid token"});
        }
        
    }
    else{
        res.status(400).json({"message": "No authorizaion token provided"});
    }

}

module.exports = authMiddleware;