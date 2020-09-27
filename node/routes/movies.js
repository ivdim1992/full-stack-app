const express = require('express');
const router = express.Router();
const Movie = require('../middlewares/db/models/Movie');

const upload = require('../services/file-upload');

router.get('/movies', async (req, res, next) => {
    try {
        let comedy = 0;
        let actions = 0;
        let drama = 0;
        let horror = 0;
        let fantasy = 0;
        let adventure = 0;
        let animation = 0;
        let crime = 0;
        let family = 0;
        let mystery = 0;

        const movies = await Movie.find({ creator: req.user.id });

        res.status(200).setHeader('Content-Type', 'application/json');

        return res.end(JSON.stringify(movies));
    } catch (err) {
        next(err);
    }
});

router.post('/movies', upload.single('image'), async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.description) {
            res.status(400).send({ error: 'title and description required' })
                .end;
        }

        const movie = await req.models.Movie.create({
            ...req.body,
            creator: req.user.id,
            poster: req.file.location,
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
        next(err);
    }
});

router.get('/movies/:movieId', async (req, res, next) => {
    try {
        const id = req.params.movieId;
        const movie = await req.models.Movie.findOne({ _id: id });

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(movie));
    } catch (err) {
        next(err);
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
        next(err);
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
        next(err);
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
        next(err);
    }
});

router.delete('/movies/:movieId', async (req, res, next) => {
    try {
        const id = req.params.movieId;
        await req.models.Movie.deleteOne({ _id: id });
        const index = req.user.movies.indexOf(id);

        if (index > -1) {
            req.user.movies.splice(index, 1);
            req.user.save();
        }

        res.status(200).setHeader('Content-Type', 'application/json');
        return res.end();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
