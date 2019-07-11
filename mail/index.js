const nodemailer = require('nodemailer');

class Mailer{
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: 'gymirwindir@gmail.com',
                pass:  'blackingpower'
            }
        });

        //Validar que el transporte si tiene una conexion valida
        // this.transporter.verify();
    }

    sendMail(){
        console.log('mandar correo');
         // send mail with defined transport object
 

    }
}

module.exports = new Mailer();