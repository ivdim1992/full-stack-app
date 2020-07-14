const app = require('./app');

const { HOST, PORT, JWT_SECRET } = process.env;

app.start({
    host: HOST || 'localhost',
    port: PORT || 2020,
    jwtSecret: JWT_SECRET || 'Sup3rSekr37n@#!',
});
