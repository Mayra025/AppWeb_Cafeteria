'use strict'
var express = require('express');
var router = express.Router();
var cafeteriaController = require('../controllers/cafeteria.controller');


//pagina de inicio
router.get('/inicio', cafeteriaController.inicio);


//Contactos
//guardar contacto
router.post('/guardar-contacto', cafeteriaController.saveContacto);



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