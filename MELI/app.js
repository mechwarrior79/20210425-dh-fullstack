const express = require('express');
const app = express();
// Requerimos el módulo path
const path = require('path');
const publicPath = path.resolve(__dirname, '../public')

/*Configurar carpetas estáticas*/
app.use(express.static(publicPath));
//express.static

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

/*Todas sus rutas*/

app.listen('3000' , function (){
    console.log('Estoy corriendo en el puerto 3000');
});