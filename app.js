'use strict'

var express = require('express');
var bodyParser =require('body-parser');

var app = express();

//cargar archivos de rutas

//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas

app.get('/',(req,res) => {
    res.status(200).send(
       "<h1>Pagina de inicio<h1>"
    )
})
app.get('/test',(req,res) => {
    res.status(200).send({
        message: "Hola mundo desde mi api node js"
    })
})

//exportar

module.exports = app;