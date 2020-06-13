const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();
const Movie = require('../middlewares/db/models/Movie');
const User = router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movie.find({ creator: req.user.id });

        res.status(200).setHeader('Content-Type', 'application/json');

        return res.end(JSON.stringify(movies));
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.post('/movies', async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.description) {
            res.status(400).send({ error: 'title and description required' })
                .end;
        }

        const movie = await req.models.Movie.create({
            ...req.body,
            creator: req.user.id,
        });

        req.user.movies.push(movie.id);
        req.user.save();

        await Movie.findOne({ title: req.body.title })
            .populate('creator')
            .exec((err, _) => {
                if (err) {
                    throw Error("couldn't create movie");
                }
                res.status(201).setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify(movie));
            });
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.get('/movies/:movieId', async (req, res, next) => {
    try {
        const id = req.params.movieId;
        const movie = await req.models.Movie.findOne({ _id: id });

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(movie));
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.put('/movies/:movieId', async (req, res, next) => {
    try {
        const id = req.params.movieId;
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

router.post('/movies/:movieId/favorites', async (req, res, next) => {
    try {
        const id = req.params.movieId;

        await req.models.Movie.updateOne({ _id: id }, req.query);
        const movie = await Movie.findById({ _id: id });
        res.status(200).setHeader('Content-Type', 'application/json');
        return res.send(movie);
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.get('/movies/favorites/all', async (req, res, next) => {
    try {
        const favoriteMovies = await Movie.find({
            creator: req.user.id,
            isFavorite: true,
        });

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(favoriteMovies));
    } catch (err) {
        throw new Error('Something went wrong');
    }
});

router.delete('/movies/:movieId', async (req, res, next) => {
    const id = new ObjectId(req.params.movieId);
    await req.models.Movie.deleteOne({ _id: id });

    res.status(200).setHeader('Content-Type', 'application/json');
    return res.end();
});
module.exports = router;
