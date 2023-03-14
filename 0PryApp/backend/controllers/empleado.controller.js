'use strict'
var Producto = require('../models/producto');
var fs = require('fs');
const path = require('path');

var controller = {

    getProductos: function (req, res) {
        Producto.find({}).sort().exec((err, productos) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!productos) return res.status(404).send({ message: 'No hay productos para mostrar' });
            return res.status(200).send({ productos });

        })

    },
    saveProducto: function (req, res) {
        var producto = Producto();
        var params = req.body;

        //capturando datos
        producto.nombre = params.nombre;
        producto.descripcion = params.descripcion;
        producto.precio = params.precio;
        // libro.imagen = null;

        producto.save((err, productoGuardado) => {
            if (err) return res.status(500).send({ message: 'Error al guardar' });
            if (!productoGuardado) return res.status(404).send({ message: 'No se ha guardao el producto' });
            return res.status(200).send({ producto: productoGuardado });
        })
    },

    getProducto: function (req, res) {
        var productoId = req.params.id;
        if (productoId == null) return res.status(404).send({ message: 'El producto no existe' });

        Producto.findById(productoId, (err, producto) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!producto) return res.status(404).send({ message: 'El producto no existe' });
            return res.status(200).send({ producto });

        })
    },

    deleteProducto: function (req, res) {
        var productoId = req.params.id;


        Producto.findByIdAndRemove(productoId, (err, productoBorrado) => {
            if (err) return res.status(500).send({ message: 'Error al borrar los datos' });
            if (!productoBorrado) return res.status(404).send({ message: 'No se puede eliminar el producto' });
            return res.status(200).send({ producto: productoBorrado });

        })
    },

    updateProducto: function (req, res) {  //put
        var productoId = req.params.id;
        var update = req.body;


        Producto.findByIdAndUpdate(productoId, update, { new: true }, (err, productoActualizado) => {
            if (err) return res.status(500).send({ message: 'Error al actualizar los datos' });
            if (!productoActualizado) return res.status(404).send({ message: 'El producto no existe para actualizar' });
            return res.status(200).send({ producto: productoActualizado });

        })
    },

    // uploadImage: function (req, res) {
    //     var libroId = req.params.id;
    //     var fileName = 'Imagen no subida';

    //     if (req.files) {
    //         var filePath = req.files.imagen.path;
    //         var file_split = filePath.split('\\');
    //         var fileName = file_split[1];
    //         var extSplit = fileName.split('\.');
    //         var fileExt = extSplit[1];
    //         if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
    //             Libro.findByIdAndUpdate(libroId, { imagen: fileName }, { new: true }, (err, libroActualizado) => {
    //                 if (err) return res.status(500).send({ message: 'La imagen no se ha subido' });
    //                 if (!libroActualizado) return res.status(404).send({ message: 'El libro no existe y no se subiuo la imagen' });
    //                 return res.status(200).send({ libro: libroActualizado });
    //             });
    //         } else {
    //             fs.unlink(filePath, (err) => {
    //                 return res.status(200).send({ message: 'La extension no es valida' });
    //             });
    //         }
    //     } else {
    //         return res.status(200).send({ message: fileName });
    //     }
    // },
    // getImagen: function (req, res) {  //con el nombre de la img
    //     var file = req.params.imagen;
    //     var path_file = "./uploads/" + file;
    //     fs.exists(path_file, (exists) => {
    //         if (exists) {
    //             return res.sendFile(path.resolve(path_file));
    //         } else {
    //             res.status(200).send({ message: 'La imagen no existe' });
    //         }
    //     })
    // }
}

module.exports = controller;