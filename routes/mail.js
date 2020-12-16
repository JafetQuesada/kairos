'use strict'
const nodemailer = require('nodemailer');
require('dotenv').config();
this.enviar_mail = (nombre, correo, telefono, descripcion) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });
    let mail_options = {
        from: 'Alimentos Kairós y Más ',
        to: correo,
        subject: 'Confirmación de su pedido',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#dd969c" bgcolor="#dd969c">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #4b2c21; text-align:center">Saludos</h1>
                        <p  style="color: #4b2c21; text-align:center">
                            <span style="color: #fff">${nombre}</span> 
                            Recibimos correctamente su pedido con la siguiente descripción:
                        </p>
                        <p style="color: #4b2c21; text-align:center">${descripcion}</p>
                    </td>
                </tr>
                <tr bgcolor="#fff">
                    <td style="text-align:center">
                        <p style="color: #4b2c21">Su pedido está siendo procesado, nos pondremos en contacto con usted al teléfono ${telefono}</p>
                    </td>
                </tr>
            </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};
module.export = this;