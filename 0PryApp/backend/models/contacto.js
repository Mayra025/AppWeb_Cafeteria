'use strict'
 var mongoose=require('mongoose');
 var Schema=mongoose.Schema;

 var ContactosSchema=Schema({
     nombre:String,
     apellido:String,
     telefono:String,
     email:String,
     mensaje:String
 });
 module.exports=mongoose.model('contacto',ContactosSchema);