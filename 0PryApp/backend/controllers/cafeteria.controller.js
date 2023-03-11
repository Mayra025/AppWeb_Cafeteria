'use strict'

var Contacto = require("../models/contacto");
var fs = require('fs');
const path = require("path");

var controller = {
    inicio: function (req, res) {
        return res.status(201).send(
            "<h1>Hola 2</h1>"
        );
    },

    // contacto

    saveContacto:function(req,res){
        var contacto=new Contacto();
        var params=req.body;
    
        contacto.nombre=params.nombre;
        contacto.email=params.email;
        contacto.telefono=params.telefono;
        contacto.mensaje=params.mensaje;
    
        contacto.save((err,contactoStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar'});
            if(!contactoStored) return res.status(404).send({message:'No se ha guardado el contacto'});
            return res.status(200).send({contacto:contactoStored});
        });
    }
}

module.exports=controller;