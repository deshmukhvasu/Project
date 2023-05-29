global.root = __dirname;
const server = require("./express")();
const { port } = require("./config");
const PORT = process.env.PORT || port;
const { query,connect } = require("./config/db.mysql");

server.listen(PORT, async () => {
        connect();
  global.poolQuery = query;
  console.log("server is runnung:", PORT);
});

// docker build --tag chatapp .
// docker run -d -p 8000:8000 chatapp
