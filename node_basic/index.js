var express = require('express');
var path = require('path');

var app = express(); // Cria uma aplicação Express

app.get('/', function (request, response) { // Simples request handler
    response.send('Olá Mundo!');
});

app.listen(3000, function () { // Inicia uma requisição do Express
    console.log('Escutando em http://localhost:3000');
}); 