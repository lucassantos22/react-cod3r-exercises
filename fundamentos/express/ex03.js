const express = require('express');
const app = express();
const port = 3000;

app.use('/api', (req, res, next)=>{
    console.log('Início...');
    next();
    console.log('Fim...');
});

app.use('/api', (req, res)=>{
    console.log('Resposta...');
    res.send('<h1>API!</h1>');
});

app.use(()=>{
    console.log('Chegou!');
});

app.listen(port, ()=>{
    console.log(`Listening at ${port}`);
});