const express = require('express');
const router = express.Router();
const User = require('../middlewares/db/models/User');
const auth = require('../middlewares/auth/index');

router.post('/auth/register', async (req, res, next) => {
    try {
        const user = new User(req.body);
        const token = await user.generateAuthToken();
        user.token = token;
        await user.save();
        res.status(201).send({ message: ' Successfully registered' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send('The user already exist!');
            return;
        }
        res.status(400).send(error);
    }
});

router.post('/auth/login', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email }).select('-password');
        if (!user) {
            return res.status(401).send('Login failed! Check credentials');
        }
        const token = await user.generateAuthToken();
        user.token = token;
        await user.save();
        res.send({ user });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/auth/logout', auth, async (req, res) => {
    // Log user out of all devices
    try {
        req.user.token = '';
        await req.user.save();
        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ message: 'Sign out successfully' }));
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;
