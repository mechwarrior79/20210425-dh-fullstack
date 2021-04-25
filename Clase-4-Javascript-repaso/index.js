var variable1 = 'Esta es una variable creada con VAR';
// Las comillas dobles son más lentas que las simples
// var variable1 = "Esta es una variable creada con VAR";

const variable3;
// Ver más abajo

let variable2;

//Testeo de scope con let
variable2 = 23;

console.log(variable2);

//Al usar let el console.log debe estar dentro de los {}

if(true){
    let prueba = 1;
    console.log (prueba);
}

//Si declaro la variable fuera de los paréntesis, puedo poner el console.log afuera
let prueba;

if(true){
    prueba = 1;
}
console.log (prueba);

const credencial = 12346789;
// Lo siguiente da un error de re-asignación de una constante, ya que una vez definida, no puedo cambiarla.
// credencial = 987654321;

