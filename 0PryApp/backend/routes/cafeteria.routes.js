'use strict'
var express = require('express');
var router = express.Router();
var cafeteriaController = require('../controllers/cafeteria.controller');
var usuarioController = require('../controllers/usuario.controller');

//pagina de inicio
router.get('/inicio',cafeteriaController.inicio);


//Contactos
//guardar contacto
router.post('/guardar-contacto',cafeteriaController.saveContacto);



///Para Usuario-Sesiones
var usuarioController = require('../controllers/usuario.controller');

router.post('/create-user', usuarioController.saveUsuario);
router.post('/login', usuarioController.login);
router.get('/logout', usuarioController.logout);



module.exports=router;