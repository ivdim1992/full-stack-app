const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const User = require('../middlewares/db/models/User');

router.get('/users/:userId', async (req, res, next) => {
    try {
        const id = new ObjectId(req.params.userId);

        const user = await User.findOne({ _id: id }).select('-password');

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(user));
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/users/:userId', async (req, res, next) => {
    try {
        const id = new ObjectId(req.params.userId);
        await req.models.User.updateOne({ _id: id }, req.body);

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(
            JSON.stringify(
                Object.assign({}, req.body, { _id: req.params.userId })
            )
        );
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
