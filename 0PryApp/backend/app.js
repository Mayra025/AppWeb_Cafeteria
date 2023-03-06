'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var cafeteriaRoutes = require('./routes/cafeteria.routes');
//todo que lo que llega y se envia se convuerta en json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configuracion de cabeceras
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With,Content-Type,Accept, Access-Control-Allow,Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});
 
app.use('/',cafeteriaRoutes);

module.exports=app;