const express = require('express');
const server = express();
require('dotenv').config({ path: './config/.env' });
const routesUsers = require('./routes/usersRoutes');
const routesPosts = require('./routes/postsRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors({
    origin: 'http://localhost:3001'
}))

// routes
server.use('/user', routesUsers);
server.use('/post', routesPosts);


server.listen(process.env.PORT, () => {
    console.log(`écoute du port ${process.env.PORT}`)
});