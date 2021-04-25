const sumar = require(__dirname + '/calculadora/sumar');
const restar = require(__dirname + '/calculadora/restar');
const multiplicar = require(__dirname + '/calculadora/multiplicar');
const dividir = require(__dirname + '/calculadora/dividir');

console.log(sumar(10,40));
console.log(restar(34.4556,5));
console.log(multiplicar(64,0));
console.log(dividir(0,10));

//console.log(console);  puedo usar console.log para saber que hay en un objeto!