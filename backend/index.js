"use strict";

const http       = require('http');
const mongoose   = require('mongoose');

const api        = require('./src/api');
const config     = require('./config');


// Set the port to the API.
api.set('port', config.port);

//Create a http server based on Express
const server = http.createServer(api);


//Connect to the MongoDB database; then start the server
mongoose
    .connect(config.mongoURI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => server.listen(config.port))
    .catch(err => {
        console.log('Error connecting to the database', err.message);
        process.exit(err.statusCode);
    });



let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

server.on('listening', () => {
    console.log(`API is running in port ${config.port}`);
});

server.on('error', (err) => {
    console.log('Error in the server', err.message);
    process.exit(err.statusCode);
});