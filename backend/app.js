
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { mongoose } = require('./database');

//Inicializando
const app = express();
require('./database');
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));

app.use(express.json());
//Importante para comunicar el servidor
//app.use(cors({ origin: 'http://localhost:4200' }));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
    //Serve static files from the react frontend app
   // app.use(express.static(path.join(__dirname,'/../../frontend/dist/frontend')));
    //Anything that doesnt match the above
    app.get('*',(req,res) => {
        const index = path.join(__dirname, '/../../frontend/dist/frontend/','index.html');
        res.sendFile(index);
    });
}

// Routes
app.use('/api/suppliers/', require('./routes/supplier.routes'));
app.use('/api/notes/', require('./routes/note.routes'));
app.use('/api/external_expenses', require('./routes/external_expenses.routes'));
app.use('/api/pending_invoices', require('./routes/pending_invoice.routes'));
app.use('/api/notifications', require('./routes/notification.routes'));
app.use('/api/sales', require('./routes/sale.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/schedules', require('./routes/schedule.routes'));
app.use('/api/movies', require('./routes/movie.routes'));


// Starting the server
module.exports = app;