const express = require('express');
const router = express.Router();

const upload = require('../services/file-upload');

const singleFileUpload = upload.single('image');

router.post('/file-upload', function (req, res) {
    singleFileUpload(req, res, function (err) {
        return res.json({
            imageUrl: req.file.location,
        });
    });
});

module.exports = router;
