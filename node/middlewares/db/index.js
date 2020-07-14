const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = (req, res, next) => {
    req.database = mongoose;
    req.models = mongoose.models;
    next();
};
