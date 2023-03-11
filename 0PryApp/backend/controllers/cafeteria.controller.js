'use strict'

var Contacto = require("../models/contacto");
var Plato = require("../models/plato");
var fs = require('fs');
const path = require("path");

var controller = {
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
    },

    //Platos

    getPlatos: function (req, res) {
        Plato.find({}).sort().exec((err, Platos) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!Platos) return res.status(404).send({ message: 'No hay Platos para mostrar' });
            return res.status(200).send({ Platos });

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
    }

}

module.exports=controller;