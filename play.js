// establishes a connection with the game server
const connect = require('./client');

// check for the ctrl + c input and terminate the game
const handleUserInput = function(key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();