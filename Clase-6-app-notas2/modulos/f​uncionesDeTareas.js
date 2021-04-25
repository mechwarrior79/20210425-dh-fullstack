const fs = require('fs');

function leerTarea(){
    let tareas = fs.readFileSync('/Users/franciscorivero/Desktop/DH-FullStack/Node/Clase-6-app-notas2/tareas.json'); 
    tareas = JSON.parse(tareas); 

    return tareas;
}

function escribirJSON(array) {
    let json= JSON.stringify(array);
    fs.writeFileSync('/Users/franciscorivero/Desktop/DH-FullStack/Node/Clase-6-app-notas2/tareas.json', json);
}

function guardarTarea(objetoTarea) {
    let arrayTareas = leerTarea();
    arrayTareas.push(objetoTarea);
    escribirJSON(arrayTareas);
}

module.exports = {leerTarea, escribirJSON, guardarTarea};