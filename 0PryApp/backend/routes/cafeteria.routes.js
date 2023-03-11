'use strict'
var express = require('express');
var router = express.Router();
var cafeteriaController = require('../controllers/cafeteria.controller');
var usuarioController = require('../controllers/usuario.controller');

//para las img
var multiparty = require('connect-multiparty');
const plato = require('../models/plato');
var multipartyMiddleWare = multiparty({ uploadDir:'./uploads' });


//MENU

//ver el menu completo
router.get('/platos', cafeteriaController.getPlatos);

//guardar plato
router.post('/guardar-plato', cafeteriaController.savePlato);

//ver datos de un plato
router.get('/plato/:id', cafeteriaController.getPlato);

//eliminar plato
router.delete('/plato/:id', cafeteriaController.deletePlato);

//actualizar plato
router.put('/plato/:id', cafeteriaController.updatePlato);

//agregar una imagen
router.post('/subir-imagen/:id', multipartyMiddleWare, cafeteriaController.uploadImage);

//recuperar img
router.get('/get-imagen/:imagen', cafeteriaController.getImagen);


//CONTACTO

//guardar contacto
router.post('/guardar-contacto',cafeteriaController.saveContacto);




///Para Usuario-Sesiones
var usuarioController = require('../controllers/usuario.controller');

router.post('/create-user', usuarioController.saveUsuario);
router.post('/login', usuarioController.login);
router.get('/logout', usuarioController.logout);



module.exports=router;