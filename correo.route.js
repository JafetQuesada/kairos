'use strict';
const express = require('express');
const router = express.Router();

const mailer = require('../routes/mail');

router.post('/enviar-correo', (req, res) => {
    let body = req.body;
    mailer.enviar_pedido(body.nombre, body.correo, body.telefono, body.descripcion);
    mailer.enviar_mail(body.nombre, body.correo, body.telefono, body.descripcion);

    res.json({
        ok: 'ok'
    })

});

module.exports = router;