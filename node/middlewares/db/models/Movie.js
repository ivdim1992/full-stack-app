const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    isFavorite: {
        type: Boolean,
        required: false,
    },
    genres: Array,
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
