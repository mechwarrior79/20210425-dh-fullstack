const fs = require('fs');

const funcionesDeTareas = require('/Users/franciscorivero/Desktop/DH-FullStack/Node/Clase-6-app-notas2/modulos/f​uncionesDeTareas');

let tareas = funcionesDeTareas.leerTarea();

const argumento = process.argv[2];

switch (argumento) {
    case 'listar':
        console.log('--------------------------------------​');       
        //console.log(tareas); listaba todo el JSON en formato JS.
        
        //Otra opción con for
        // for (let i = 0; i < tareas.length; i++) {
        //    console.log('La tarea ' + tareas[i].titulo + ' se encuentra ' + tareas[i].estado );
        //}

        //La opción con forEach

        tareas.forEach(tarea => {
            console.log('La tarea ' + tarea.titulo + ' se encuentra ' + tarea.estado );
        });
        console.log('--------------------------------------​');       
        break;
    
    case 'crear':
        let tareaNueva = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        funcionesDeTareas.guardarTarea(tareaNueva);
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
}