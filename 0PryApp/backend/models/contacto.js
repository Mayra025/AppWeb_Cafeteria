'use strict'
 var mongoose=require('mongoose');
 var Schema=mongoose.Schema;

 var ContactosSchema=Schema({
     nombre:String,
     email:String,
     telefono:String,
     mensaje:String
 });
 module.exports=mongoose.model('contactos',ContactosSchema);