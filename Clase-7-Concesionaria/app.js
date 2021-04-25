/* requerir módulo autos */
const fs = require('fs')

const autos = require('/Users/franciscorivero/Desktop/DH-FullStack/Node/Clase-7-Concesionaria/modulos/autos.js')

const argumento = process.argv[2];
const nroPatente = process.argv[3];

    switch (argumento) {
        case'stock':
            autos.forEach(autos => {
                if (autos.vendido===false) {
                return ('El auto con patente ' + autos.patente + ' se encuentra disponible');
                } else {
                    return  ('El auto con patente ' + autos.patente + ' fue vendido');
                }
            })
        
            break;
    
        /*case undefined:
            autos.forEach => (autos.vendido ===true) {
                console.log('El auto con patente ' + process.argv[2] + ' no existe en stock');
            });
            break;*/

        default:
            console.log('Debe ingresar una patente');
            break;
    }    
