'use strict'
var Usuario = require('../models/usuario');
var fs = require('fs');
const path = require('path');

var controller = {
    inicio: function (req, res) {
        return res.status(201).send({ message: `<h1>Hola 2</h1>` });

    },

    // getInfo: function (req, res) {
    //     // var usuarioId = req.params.id;

    //     var data = getCliente(res.locals.user)
    //     if (data == null) return res.status(404).send({ message: 'no hay info' });

    //     Usuario.findById(data, (err, usuario) => {
    //         if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
    //         if (!usuario) return res.status(404).send({ message: 'El usuario no existe' });
    //         return res.status(200).send({ data });

    //     })
    // },
    // getCliente: function (req, res) {
    //     var user = req.body.user;
    //     var password = req.body.password;
    //     var rol = req.body.rol;

    //     Usuario.findOne({ user, password, rol }, (err, usuario) => {   //findOne para captar 2 datos 
    //         if (err) return res.status(500).send({ message: 'Error al recuperar cliente' });
    //         if (!usuario) return res.status(404).send({ message: 'credenciales incorrectas' });
    //         if (user == usuario.user && password == usuario.password) {
    //             session.req.session; session.user = req.body.user;
    //             return res.status(200).send({ usuario })

    //         }
    //     })

    // },
    getCliente: function (req, res) {
        var params = req.headers;

        var user = params.user;
        var password = params.password;
        var rol = params.rol;

        if (user == null || password == null || rol == null) return res.status(404).send({ message: 'Datos incorrectos' })
        Usuario.findOne({ user, password, rol }, (err, usuario) => {   //findOne para captar 2 datos 
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!usuario) return res.status(404).send({ message: 'El usuario no existe' });
            return res.status(200).send({ message: 'ok', r: usuario });
        })
    },

    // restar: function (req, res) {
    //     var calculo = Calculo();
    //     var params = req.headers;
    //     //capturando datos
    //     calculo.num1 = parseFloat(params['num1']);
    //     calculo.num2 = parseFloat(params['num2']);
    //     let ans = calculo.num1 - calculo.num2;
    //     calculo.resultado = ans;

    //     calculo.save((err, guardado) => {
    //         if (err) return res.status(500).send({ message: 'Erros al guardar' });
    //         if (!guardado) return res.status(200).send({ message: 'No se ha guardao' });
    //         return res.status(402).send({ message: `Op: ${calculo.num1} - ${calculo.num2} = ${ans}`, r: calculo.resultado })
    //     })
    // },

    saveUsuario: function (req, res) {
        var usuario = new Usuario();
        var params = req.body;

        usuario.user = params.user;
        usuario.password = params.password;
        usuario.rol = params.rol;
        usuario.nombre = params.nombre;
        usuario.apellido = params.apellido;
        usuario.domicilio = params.domicilio;
        usuario.telefono = params.telefono;

        usuario.save((err, usuarioGuardado) => {
            if (err) return res.status(500).send({ message: 'Error al guardar' });
            if (!usuarioGuardado) return res.status(404).send({ message: 'No se ha guardado el usuario' });
            return res.status(200).send({ usuario: usuarioGuardado });
        })
    },

    login: function (req, res) {
        var user = req.body.user;
        var password = req.body.password;
        var rol = req.body.rol;
        var session = req.session;

        console.log(user, password, rol, session);

        if (user == null || password == null || rol == null) return res.status(404).send({ message: 'Datos incorrectos' })
        Usuario.findOne({ user, password, rol }, (err, usuario) => {   //findOne para captar 2 datos 
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!usuario) return res.status(404).send({ message: 'Usuario, contraseña o rol incorrectos' });
            if (user == usuario.user && password == usuario.password) {
                session.req.session; session.user = req.body.user;
                return res.status(200).send({
                    // usuario
                    message: `Bienvenido ${user} <a href=\'/logout'>Logout</a>`
                });
            }
        })
    },


    logout: function (req, res) {
        req.session.destroy();  //destruir la sesion
        res.redirect('/inicio');
    }
}

module.exports = controller;