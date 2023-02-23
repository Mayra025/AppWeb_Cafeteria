'use strict'
var Usuario = require('../models/usuario');
var fs = require('fs');
const path = require('path');
const usuario = require('../models/usuario');

var controller = {
    inicio: function (req, res) {
        return res.status(201).send({
            message: "<h1>Hola 2</h1>", user
        });
    },

    saveUsuario: function (req, res) {
        var usuario = new Usuario();
        var params = req.body;
   
        usuario.nombre = params.nombre;
        usuario.apellido = params.apellido;
        usuario.domicilio = params.domicilio;
        usuario.telefono = params.telefono;
        usuario.correo = params.correo;

        usuario.save((err, usuarioGuardado) => {
            if (err) return res.status(500).send({ message: 'Error al guardar' });
            if (!usuarioGuardado) return res.status(404).send({ message: 'No se ha guardado el usuario' });
            return res.status(200).send({ usuario: usuarioGuardado });
        })
    },

    login: function (req, res) {
     /*   var user = req.body.user;
        var password = req.body.password;
        var session = req.session;
        console.log(user, password, session);
        if (user == null || password == null) return res.status(404).send({ message: 'Datos incorrectos' })
        Usuario.findOne({ user, password }, (err, usuario) => {   //findOne para captar 2 datos 
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!usuario) return res.status(404).send({ message: 'Usuario o contraseña incorrectos' });
            if (user == usuario.user && password == usuario.password) {
                session.req.session; session.user = req.body.user; res.send(`Bienvenido ${user} <a href=\'/logout'>Logout</a>`)
            }
        })*/
    },

    logout: function (req, res) {
        req.session.destroy();  //destruir la sesion
       // res.redirect('/inicio');
    }
}

module.exports = controller;