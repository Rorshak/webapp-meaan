const mongoose = require('mongoose');
const { Schema } = mongoose;

//moment().format();
const SaleSchema = new Schema({
    //FechaVenta
    name: { type: String, required: true },
    //Mesa
    genre: { type: String, required: true },
    //Platillo_Bebida 
    year: { type: String, required: true },
    //Cantidad
    director: { type: String, required: true }   

});


module.exports = mongoose.model('Movie', SaleSchema);