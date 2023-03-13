'use strict'
 var mongoose=require('mongoose');
 var Schema=mongoose.Schema;

 var PedidoSchema=Schema({
    nombrePropietario: String,
    nombrePlato:String,
    cantidad:Number,
    precio:Number,
    
 });
 module.exports=mongoose.model('pedido',PedidoSchema);