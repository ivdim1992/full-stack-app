const express = require('express');
const router = express.Router();
const User = require('../middlewares/db/models/User');
const auth = require('../middlewares/auth/index');

router.post('/auth/register', async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({ message: 'The user already exist!' });
            return;
        }
        res.status(400).send(error);
    }
});

router.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res
                .status(401)
                .send({ error: 'Login failed! Check credentials' });
        }
        const token = await user.generateAuthToken();

        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/auth/logout', auth, async (req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length);
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;
