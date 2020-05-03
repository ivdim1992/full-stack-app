// const express = require('express');
// const router = express.Router();
// const User = require('../middlewares/db/models/User');

// router.get('/users', async (req, res, next) => {
//     try {
//         const user = await
//         await user.save();
//         const token = await user.generateAuthToken(user);
//         res.status(201).send({ user, token });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// router.post('/auth/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findByCredentials(email, password);
//         if (!user) {
//             return res
//                 .status(401)
//                 .send({ error: 'Login failed! Check credentials' });
//         }
//         const token = await user.generateAuthToken();
//         res.send({ user, token });
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// });
// module.exports = router;
