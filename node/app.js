const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./middlewares/logger');
const db = require('./middlewares/db');
const auth = require('./middlewares/auth');

const cors = require('cors');
const moviesRoutes = require('./routes/movies');
const userRoutes = require('./routes/user');
const swaggerRoutes = require('./routes/swagger');
const authRoutes = require('./routes/auth');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
};

const app = express();

module.exports = {
    start: ({ host, port, jwtSecret }) => {
        app.use(helmet());
        app.use(cors(corsOptions));

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        app.use(db);
        app.use(allowCrossDomain);

        app.use('/api', logger);

        app.use(swaggerRoutes);
        app.use('/api', authRoutes);
        app.use('/api', auth, moviesRoutes, userRoutes);

        app.use((err, req, res, next) => {
            if (res.headersSent) {
                return next(err);
            }
            res.status(500);
            res.render('error', { error: err });
        });

        app.listen(port, () => {
            console.log(`app listening on port ${port}`);
        });
    },
};
