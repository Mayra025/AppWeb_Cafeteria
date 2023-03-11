'use strict'
var express = require('express');
var router = express.Router();
var cafeteriaController = require('../controllers/cafeteria.controller');
//pagina de inicio
router.get('/inicio',cafeteriaController.inicio);
//pagina de inicio

//Contactos
//guardar contacto
router.post('/guardar-contacto',cafeteriaController.saveContacto);


module.exports=router;