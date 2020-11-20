const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next)=>{
    console.log('Início...');
    next();
    console.log('Fim...');
});

app.get('/', (req, res)=>{
    console.log('Resposta...');
    res.send('<h1>Olá Express</h1>');
});

app.listen(port, ()=>{
    console.log(`Listening at ${port}`);
});