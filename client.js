const net = require("net");
const { host, port } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({ host, port });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: QC");

    setTimeout(() => {
      conn.write("Say: Hiii");
    }, 1000);
  });
  
  

  conn.on("data", (data) => { // show data from the server
    console.log(data);
  });

  return conn; // allowed us to interact with the server
};

module.exports = connect;