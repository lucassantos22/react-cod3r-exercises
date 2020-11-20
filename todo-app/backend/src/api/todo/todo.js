const restful = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, default: false, required: true},
    createdAt: {type: Date, default: Date.now()}
});

module.exports = restful.model('Todo', todoSchema);