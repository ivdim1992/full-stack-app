const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.SECRETACCESSKEY,
    accessKeyId: process.env.ACCESSKEYID,
    region: 'eu-west-2',
});

const s3 = new aws.S3({});

const checkFileType = (file, cb) => {
    return cb(null, file.mimetype);
};

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'movies-test-bucket-1',
        acl: 'public-read',
        contentType: function (req, file, cb) {
            checkFileType(file, cb);
        },
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    }),
});

module.exports = upload;
