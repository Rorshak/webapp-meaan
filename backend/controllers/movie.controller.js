const Movie = require('../models/movie');

const movieCtrl = {};


movieCtrl.getMovies = async (req, res) => {
    //Hace busqueda a la BD

    const movies = await Movie.find();
    res.json(movies);
};

movieCtrl.createMovie = async (req, res) => {
    //crear SellControl
    const movie = new Movie({
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        director: req.body.director
       
    });
    //Fecha
  //  dateSell.toLocaleDateString("es-MX");
    await movie.save();

    res.json({
        'status': 'Realizado'
    });
};

movieCtrl.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    res.json(movie);
};

movieCtrl.editMovie = async (req, res) => {
    const { id } = req.params;
    const sale = {
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        director: req.body.director
    }
    await Movie.findByIdAndUpdate(id, { $set: sale }, { new: true });
    res.json({
        status: 'Venta Actualizada'
    });

}
movieCtrl.deleteMovie = async (req, res) => {
    await Movie.findByIdAndRemove(req.params.id);
    res.json({ status: 'Venta Eliminada' });
}
module.exports = movieCtrl;