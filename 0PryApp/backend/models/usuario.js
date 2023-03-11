'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    user: String,
    password: String,
    rol: String,
    nombre: String,
    apellido: String,
    domicilio: String,
    telefono: String,
   // correo: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);