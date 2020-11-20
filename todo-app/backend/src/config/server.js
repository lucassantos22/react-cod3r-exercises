const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const allowCors = require('./cors')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(port, ()=>{
    console.log(`Running at ${port}`);
});

module.exports = app;