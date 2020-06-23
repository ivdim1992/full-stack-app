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
            res.status(400).send({ message: 'The user already exist!' });
            return;
        }
        res.status(400).send(error);
    }
});

router.post('/auth/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            return res
                .status(400)
                .send({ message: 'Login failed! Check credentials' });
        }

        const doesPasswordMatch = await user.doesPasswordsMatch(password);

        if (!doesPasswordMatch) {
            return res
                .status(400)
                .send({ message: 'Login failed! Check credentials' });
        }

        user = await User.findOne({ email }).select('-password');

        const token = await user.generateAuthToken();
        user.token = token;
        res.send({ user });
    } catch (error) {
        next(error);
    }
});

router.post('/auth/logout', auth, async (req, res) => {
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
