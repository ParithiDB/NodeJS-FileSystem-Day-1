const express = require('express');
const APP_SERVER = express();

APP_SERVER.use('/files', require('./Controllers/Files.Controller'));
APP_SERVER.use('/users', require('./Controllers/Todos.Controller'));

module.exports = APP_SERVER;