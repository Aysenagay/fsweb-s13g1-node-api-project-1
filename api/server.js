// SUNUCUYU BU DOSYAYA KURUN
const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Server is up and running!...");
});

module.exports = server; // SERVERINIZI EXPORT EDİN {}
