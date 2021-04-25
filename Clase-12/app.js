const express = require ('express'); //Creando la variable de 
const path = require('path'); 
const app = express(); //Estamos invocando la ejecución de Express

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001')); //Estamos creando un servidor