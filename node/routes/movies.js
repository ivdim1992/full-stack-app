const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();
const auth = require('../middlewares/auth/index');
const Movie = require('../middlewares/db/models/Movie');

router.get('/movies', auth, async (req, res, next) => {
    try {
        const movies = await Movie.find({});

        res.status(200).setHeader('Content-Type', 'application/json');

        return res.end(JSON.stringify(movies));
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.post('/movies', auth, async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.description) {
            res.status(400).send({ error: 'title and description required' })
                .end;
        }

        const movie = await req.models.Movie.create(req.body);

        res.status(201).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(movie));
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.get('/movies/:movieId', auth, async (req, res, next) => {
    try {
        const id = new ObjectId(req.params.movieId);
        const movie = await req.models.Movie.findOne({ _id: id });

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(movie));
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.put('/movies/:movieId', auth, async (req, res, next) => {
    try {
        const id = new ObjectId(req.params.movieId);
        await req.models.Movie.updateOne({ _id: id }, req.body);

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(
            JSON.stringify(
                Object.assign({}, req.body, { _id: req.params.movieId })
            )
        );
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.post('/movies/:movieId/favorites', auth, async (req, res, next) => {
    try {
        const id = new ObjectId(req.params.movieId);

        await req.models.Movie.updateOne({ _id: id }, req.query);

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(
            JSON.stringify(
                Object.assign({}, req.query, { _id: req.params.movieId })
            )
        );
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.get('/movies/favorites/all', auth, async (req, res, next) => {
    try {
        const favoriteMovies = await Movie.find({ isFavorite: true });

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(favoriteMovies));
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.delete('/movies/:movieId', auth, async (req, res, next) => {
    const id = new ObjectId(req.params.movieId);
    await req.models.Movie.deleteOne({ _id: id });

    res.status(200).setHeader('Content-Type', 'application/json');
    return res.end();
});
module.exports = router;
