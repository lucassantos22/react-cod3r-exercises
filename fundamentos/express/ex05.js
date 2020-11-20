const express = require('express');
const app = express();
const routes = require('./ex05_routes');
const port = 3000;

app.use('/api', routes);

app.listen(port, ()=>{
    console.log(`Listening at ${port}`);
});