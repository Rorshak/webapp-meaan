const express = require('express');
const router = express.Router();
const mailer = require('../../mail');
const sale = require('../controllers/sale.controller');
//PRUEBA ENVIO MAIL
router.get('/email',(req, res)=> {
mailer.sendMail();
});
router.get('/', sale.getSales);
router.post('/', sale.createSale);
router.get('/:id', sale.getSale);
router.put('/:id', sale.editSale);
router.delete('/:id', sale.deleteSale);

module.exports = router;