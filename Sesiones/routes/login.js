var express = require('express');
var configuracion = express.Router();

/* Configuracion del usuario. */
configuracion.get('/', function (req, res, next) {
    res.render('sesiones');
  });

  module.exports = configuracion;