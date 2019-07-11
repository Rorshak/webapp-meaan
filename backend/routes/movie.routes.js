const express = require('express');
const router = express.Router();

const user = require('../controllers/movie.controller');

router.get('/', user.getMovies);
router.post('/', user.createMovie);
router.get('/:id', user.getMovie);
router.put('/:id', user.editMovie);
router.delete('/:id', user.deleteMovie);

module.exports = router;