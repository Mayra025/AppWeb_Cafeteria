'use strict'
 var mongoose=require('mongoose');
 var Schema=mongoose.Schema;

 var AlimentacionSchema=Schema({
     nombre_plato:String,
     imagen:String,
     precio:Number
 });
 module.exports=mongoose.model('alimentacion',AlimentacionSchema);