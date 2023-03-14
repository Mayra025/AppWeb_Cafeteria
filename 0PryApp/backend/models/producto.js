'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    nombre: String,
    descripcion: String,
    precio: String,

});

module.exports = mongoose.model('Producto', ProductoSchema);