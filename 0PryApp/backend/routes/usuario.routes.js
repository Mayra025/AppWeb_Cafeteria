// //2
// 'use strict'
// var express = require('express');
// var router = express.Router();
// var usuariosController = require('../controllers/usuario.controller');

// //para las img
// var multiparty = require('connect-multiparty');
// var multipartyMiddleWare = multiparty({ uploadDir: './uploads' });


//pagina Inicio
// router.get('/inicio', usuariosController.inicio); //llamando a ese archivo
//guardar libro
// router.post('/guardar-libro', usuariosController.saveLibro);

// //ver todos los libros
// router.get('/libros', usuariosController.getLibros);

// //ver datos de un libro
// router.get('/libro/:id', usuariosController.getLibro);

// //eliminar libro
// router.delete('/libro/:id', usuariosController.deleteLibro);

// //actualizar libro
// router.put('/libro/:id', usuariosController.updateLibro);


// //agregar una imagen
// router.post('/subir-imagen/:id', multipartyMiddleWare, librosController.uploadImage);

// //recuperar img
// router.get('/get-imagen/:imagen', librosController.getImagen);

///Para Usuario-Sesiones
// var usuarioController = require('../controllers/usuario.controller');

// router.post('/create-user', usuarioController.saveUsuario);
// router.post('/login', usuarioController.login);
// router.get('/logout', usuarioController.logout);



// module.exports = router;
