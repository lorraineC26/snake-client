// establishes a connection with the game server
const connect = require('./client');
// setup interface to handle user input from stdin
const setupInput = require('./input');

console.log("Connecting ...");
connect();

setupInput();