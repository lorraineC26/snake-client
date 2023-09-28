// const { stdin } = require("process");
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn; // accept an object that lets you interact with the server

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit(); // terminate the program
  }
  if (key === 'w') {
    connection.write("Move: up"); // use connection instead of stdin here to send cmd to server
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
};

module.exports = setupInput;