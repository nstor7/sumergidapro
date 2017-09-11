const express = require('express')
var app = require('./app.js')

app.listen(8000, function(err){
 if(err) return console.log('Hubo un Error'), process.exit(1)

 console.log('Sumergida Producciones escuchando en el puerto 8000')
})
