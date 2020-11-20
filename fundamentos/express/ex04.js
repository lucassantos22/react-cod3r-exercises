const express = require('express');
const app = express();
const port = 3000;

app.route('/clientes')
    .get((req, res)=>res.send('Lista de clientes'))
    .post((req, res)=>res.send('Novo cliente'))
    .put((req, res)=>res.send('Cliente alterado'));

app.listen(port, ()=>{
    console.log(`Listening at ${port}`);
});