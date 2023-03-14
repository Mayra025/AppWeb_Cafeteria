'use strict'
var express = require('express');
const cors = require('cors');

var bodyParser = require('body-parser');
var app = express();
var cafeteriaRoutes = require('./routes/cafeteria.routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Agrega middleware para configurar cabeceras CORS
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

//para procesar metodos GET, POST, etc
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    res.header("Access-Control-Allow-Credentials", true); /// para sesion, cookies, Autenticacion 

    next();
});

//para cookies - Autenticacion
var sessions = require('express-session');
const cookieParser = require('cookie-parser');
const oneDay = 1000 * 60 * 60 * 24;   //durancion de la sesion
app.use(sessions({
    secret: "miclave1234564asdasdvfgcdfgvszdfsdfdsf", //clave a disposicion del desarrollador
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(cookieParser());


app.use('/', cafeteriaRoutes) //archivo externo de todas las rutas
module.exports = app;
