const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });

module.exports = {
    verifyToken: (authorization) => {
        return (authorization != null) ? authorization.replace("Bearer ", "") : null;
    },
    getUser: (authorization) => {
        const token = module.exports.verifyToken(authorization);
        if (token != null) {
            const jwtToken = jwt.verify(token, process.env.SECRET);
            if (token != null) {
                const idUser = jwtToken.id
                return idUser
            }
        }
    }
}