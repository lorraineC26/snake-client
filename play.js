// serve as your main file through which you will launch the game client

const net = require("net");

// establishes a connection with the game server
const connect = require('./client');

console.log("Connecting ...");
connect();