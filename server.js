'use strict';

const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');

require('dotenv').config();

//Se declaran todos los accesos de los archivos routes.



const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// Se crea la variable db, que almacena la instancia de la base de datos, para ser reutilizada en el "callback".


//Se conecta la base de datos antes de levantar el servidor, mediante los datos del archivo .env en la raÃƒÂ­z del proyecto.

//Guarda el objeto db para que el callback la pueda reutilizar.


// Se inicia la aplicaciÃƒÂ³n.
const server = app.listen(process.env.PORT || 8000, () => {
    let port = server.address().port;
    console.log("La aplicación está levantada en el puerto: ", port);
});

//Error general en caso de que falle un "endpoint".
const handleError = (res, reason, message, code) => {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

// Conexión a todas la rutas.
app.use('/api', require('./routes/correo.route'));