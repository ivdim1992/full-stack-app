const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = (req, res, next) => {
    req.database = mongoose;
    req.models = mongoose.models;
    next();
};
