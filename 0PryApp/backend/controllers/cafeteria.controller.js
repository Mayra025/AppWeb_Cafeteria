'use strict'

var Contacto = require("../models/contacto");
var Plato = require("../models/plato");
var Pedido = require("../models/pedidos");
var fs = require('fs');
const path = require("path");

var controller = {

    //Platos

    getPlatos: function (req, res) {
        Plato.find({}).sort().exec((err, platos) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!platos) return res.status(404).send({ message: 'No hay Platos para mostrar' });
            return res.status(200).send({ platos });
        })

    },

    savePlato: function (req, res) {
        var plato = Plato();
        var params = req.body;

        //capturando datos
        plato.nombre = params.nombre;
        plato.precio = params.precio;
        plato.imagen = null;
        

        plato.save((err, platoGuardado) => {
            if (err) return res.status(500).send({ message: 'Erros al guardar' });
            if (!platoGuardado) return res.status(404).send({ message: 'No se ha guardao el Plato' });
            return res.status(200).send({ plato: platoGuardado });


        })


    },

    getPlato: function (req, res) {
        var platoId = req.params.id;
        if (platoId == null) return res.status(404).send({ message: 'El Plato no existe' });

        Plato.findById(platoId, (err, plato) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!plato) return res.status(404).send({ message: 'El Plato no existe' });
            return res.status(200).send({ plato });

        })
    },

    deletePlato: function (req, res) {
        var platoId = req.params.id;

        Plato.findByIdAndRemove(platoId, (err, platoBorrado) => {
            if (err) return res.status(500).send({ message: 'Error al borrar los datos' });
            if (!platoBorrado) return res.status(404).send({ message: 'No se puede eliminar el plato' });
            return res.status(200).send({ plato: platoBorrado });

        })
    },
    updatePlato: function (req, res) {  //put
        var platoId = req.params.id;
        var update = req.body;


        Plato.findByIdAndUpdate(platoId, update, { new: true }, (err, platoActualizado) => {
            if (err) return res.status(500).send({ message: 'Error al actualizar los datos' });
            if (!platoActualizado) return res.status(404).send({ message: 'El plato no existe para actualizar' });
            return res.status(200).send({ plato: platoActualizado });

        })
    },

    uploadImage: function (req, res) {
        var platoId = req.params.id;
        var fileName = 'Imagen no subida';

        if (req.files) {
            var filePath = req.files.imagen.path;
            var file_split = filePath.split('\\');
            var fileName = file_split[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Plato.findByIdAndUpdate(platoId, { imagen: fileName }, { new: true }, (err, platoActualizado) => {
                    if (err) return res.status(500).send({ message: 'La imagen no se ha subido' });
                    if (!platoActualizado) return res.status(404).send({ message: 'El plato no existe y no se subiuo la imagen' });
                    return res.status(200).send({ plato: platoActualizado });
                });
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({ message: 'La extension no es valida' });
                });
            }
        } else {
            return res.status(200).send({ message: fileName });
        }
    },

    getImagen: function (req, res) {  //con el nombre de la img
        var file = req.params.imagen;
        var path_file = "./uploads/" + file;
        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                res.status(200).send({ message: 'La imagen no existe' });
            }
        })
    },

    //pedido
    savePedido: function (req, res) {
        var pedido = Pedido();
        var params = req.body;

        //capturando datos
        pedido.nombrePropietario = params.nombrePropietario;
        pedido.nombrePlato = params.nombrePlato;
        pedido.cantidad = params.cantidad;
        pedido.email = params.email;
        

        pedido.save((err, pedidoGuardado) => {
            if (err) return res.status(500).send({ message: 'Erros al guardar' });
            if (!pedidoGuardado) return res.status(404).send({ message: 'No se ha guardao el plato en su pedido' });
            return res.status(200).send({ pedido: pedidoGuardado });
        })

    },

    getPedidos: function (req, res) {
        Pedido.find({}).sort().exec((err, pedidos) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!pedidos) return res.status(404).send({ message: 'No hay pedidos para mostrar' });
            return res.status(200).send({ pedidos });
        })

    },

    // contacto

    saveContacto: function (req, res) {
        var contacto = Contacto();
        var params = req.body;

        //capturando datos
        contacto.nombre = params.nombre;
        contacto.apellido = params.apellido;
        contacto.telefono = params.telefono;
        contacto.email = params.email;
        contacto.mesaje = params.mesaje;
        
        contacto.save((err, contactoGuardado) => {
            if (err) return res.status(500).send({ message: 'Erros al guardar' });
            if (!contactoGuardado) return res.status(404).send({ message: 'No se ha guardao el Evento' });
            return res.status(200).send({ contacto: contactoGuardado });

        })
    }

    


}

module.exports=controller;