const server = require('./config/server');
require('./config/database');
require('./api/todo/routes')(server);