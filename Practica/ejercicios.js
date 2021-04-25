let dato = false;

function devuelveBooleano () {
    if (dato === true) {
        return('Es '+true);
    } else {
        return ('Es '+false);
    
    }
    }
console.log(devuelveBooleano(dato));

function puedePasar (nombre) {
    if (nombre === 'Cosme Fulanito'){
    return(false);
} else {
    return (true);
}
}

console.log(puedePasar('Cosme Fulanito'));


//Agregar texto a un string
let url = 'digitalhouse.com.ar'

function dominio () {
    return('http://www.'+url);
}

console.log(dominio());

//Módulo 2 ejercicio 3

let textoReplace = 'Mi auto es rojo';

function reemplazoFastFast () {
return(textoReplace.replace('rojo', 'verde'));
}

console.log(reemplazoFastFast());

/*Módulo 2 ejercicio 3 - 2º Intento!!!

let arrayReplace = ['Mi auto es rojo','rojo','verde']

function reemplazoFastFast () {
return(
console.log(arrayReplace.replace('rojo','verde'))
)
}
*/

/*Módulo 2 ejercicio ¿Están hablando de mí?

let texto = 'hola mundo';
let palabra = 'mundo';

function menciona(texto,palabra){
    if(texto.indexOf(palabra) != -1){
    return(true);
}else{
return(false);
}
}

console.log(menciona());
*/

// Modulo 2 .slice

let frase = 'Breaking bad rules'

console.log(frase.slice(-10));


//Módulo 2 - Objetos literales 

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantidadDeHoras){
        this.energia = this.energia - (cantidadDeHoras*5);
        this.experiencia = this.experiencia + (cantidadDeHoras*2);
        }
};
console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

/*Clase 5 condicionales If ternario y Switch

function tengoClases(dia){
    switch (dia){	
        case'lunes':
        case'miércoles':
        case'viernes':
            console.log('tenés clases');
            break
        default:
            console.log('no tenés clases');
    }
    }
    
    console.log(tengoClases('jueves'));
*/
let loroDice = 'Papita para el loro';

for (let i = 0; i <5; i++){
console.log(loroDice);
}

// Ciclos: repaso del for
function noParesDeContarImparesHasta(numero){
    let catidadDeImpares = 0;
    for(let i = 0; i <= numero ; i++){
        if(i % 2 != 0 ){
            catidadDeImpares++;
        }
    }return catidadDeImpares;
}

console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los contabiliza por ser números pares.

//Callback functions

let doble = (numero) =>{
    return numero*2;
};

let triple = (numero) =>{
    return numero*3;
};

let aplicarCallBack = (numero, operacion) => operacion (numero);

console.log(aplicarCallBack(10,doble));

// Ejercicio callback Calculadora

let sumar = (numero1, numero2) => numero1+numero2;
let restar = (numero1, numero2) => numero1-numero2;
let multiplicar = (numero1, numero2) => numero1*numero2;
let dividir = (numero1, numero2) => numero1/numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(4,4,sumar));

//Calback reloaded

function agregarHttp (url){ 
    return 'http://'+url;
};

//Esta función se encarga de recibir un array  y ejecutar un método devolviendo como resultado otro array.
function procesar(array,callback){
    let resultado=[]; 

// Otra opción es usar forEach: 
// array.forEach(element => {
 //         resultado.push(callback(element))
// });

     for (let i = 0; i < array.length;  i++) {
         resultado.push(callback(array[i]));
     }
     return resultado
};

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp));

//Destructuring

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let = [,bariloche, ,china ] = destinosDelMundo;

console.log(bariloche);
console.log(china);