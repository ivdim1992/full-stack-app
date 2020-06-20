const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 10;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' });
            }
        },
    },
    token: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    phone: {
        type: Number,
        required: false,
    },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});

UserSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
    next();
});

UserSchema.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '10h',
    });

    await user.save();
    return token;
};

UserSchema.method('doesPasswordsMatch', function (password) {
    return bcrypt.compare(password, this.password);
});

UserSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error('Invalid login credentials');
    }
    return user;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
