'use strict'
var express = require('express');
var router = express.Router();
var cafeteriaController = require('../controllers/cafeteria.controller');


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
router.post('/guardar-contacto', cafeteriaController.saveContacto);



//PEDIDO
router.post('/guardar-pedido',cafeteriaController.savePedido);

//ver el pedido
router.get('/pedidos', cafeteriaController.getPedidos);


///Para Usuario-Sesiones
var usuarioController = require('../controllers/usuario.controller');
router.post('/create-user', usuarioController.saveUsuario);
router.post('/login', usuarioController.login);
router.get('/logout', usuarioController.logout);

router.get('/cliente', usuarioController.getCliente);


//Gestion Empleado
var empleadoController = require('../controllers/empleado.controller');
//guardar
router.post('/agregar-producto', empleadoController.saveProducto);
//ver todos
router.get('/productos', empleadoController.getProductos);
//ver datos de un 
router.get('/producto/:id', empleadoController.getProducto);
//eliminar 
router.delete('/producto/:id', empleadoController.deleteProducto);
//actualizar 
router.put('/producto/:id', empleadoController.updateProducto);



module.exports = router;