const express = require('express');
const server = express();
require('dotenv').config({ path: './config/.env' });
const routesUsers = require('./routes/usersRoutes');
const bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// routes
server.use('/user', routesUsers);


server.listen(process.env.PORT, () => {
    console.log(`écoute du port ${process.env.PORT}`)
});