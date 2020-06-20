const jwt = require('jsonwebtoken');
const User = require('../db/models/User');

const auth = async (req, res, next) => {
    if (!req.header('Authorization')) {
        return res
            .status(500)
            .send({
                error: 'Not Authorized',
            })
            .end();
    }

    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name == 'TokenExpiredError') {
                const refreshedToken = jwt.sign(
                    {
                        success: true,
                    },
                    app.get(process.env.JWT_SECRET),
                    {
                        expiresIn: '5m',
                    }
                );
                req.user.token = refreshedToken;
                next();
            }
            res.status(401).send({
                error: err.message,
            });
        }
        return decoded;
    });

    try {
        if (!data) {
            throw new Error('Invalid token');
        }

        const user = await User.findOne({
            _id: data._id,
        });

        if (!user) {
            throw new Error('Something went wrong');
        }
        req.user = user;
        req.user.token = token;
        next();
    } catch (error) {
        res.status(403).send({
            error: 'Not authorized to access this resource',
        });
    }
};
module.exports = auth;
