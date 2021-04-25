let calculadora = require(__dirname + '/calculadora/index');

let movieQuotes = require('popular-movie-quotes');
 
let fs = require('fs');

// USO DEL MODULO PROPIO
// console.log(calculadora.multiplicar(4,5));

// USO DEL MODULO IMPORTADO
//console.log (movieQuotes.getSomeRandom(10));

// USO DEL MODULO NATIVO
//console.log(fs.readFileSync(__dirname + '/prueba.txt', 'utf-8'));