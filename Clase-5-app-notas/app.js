const fs = require('fs');

let tareas = fs.readFileSync('./tareas.json' , 'utf-8');// Arriba de todo hago un require del modulo nativo de JS: fs
tareas = JSON.parse(tareas);//Me convierte el dato en JSON al tipo de dato correspondiente en JS. En este caso, un array.

const argumento = process.argv[2];

switch (argumento) {
    case 'listar':
        console.log('--------------------------------------​');       
        console.log(tareas);
        console.log('--------------------------------------​');       
        break;
    case undefined:
        console.log('--------------------------------------​');       
        console.log('Atención. Tienes que pasar una acción.​');
        console.log('--------------------------------------​');       
        break;
    default:
        console.log('--------------------------------------​');       
        console.log('No entiendo qué quieres hacer');
        console.log('--------------------------------------​');       
        break;
}