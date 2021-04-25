const express = require('express');
const app = express();
const path = require('path');

/*Configuraciones*/
app.use(express.static(path.resolve(__dirname ,'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.listen('3030' , function (){
    console.log('Estoy corriendo en el puerto 3030');
});