const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Apenas para remover mensagem de advertência
module.exports = mongoose.connect('mongodb://localhost/todo');