var mysql = require("mysql");
var poolCluster = mysql.createPoolCluster();
poolCluster.add("node1", {
  host: "$DB_HOST1",
  user: "$DB_USER",
  password: "$DB_PASSWORD",
  database: "$DB_NAME",
});
poolCluster.add("node2", {
  host: "$DB_HOST2",
  user: "$DB_USER",
  password: "$DB_PASSWORD",
  database: "$DB_NAME",
});

const query = (q) => {
  return new Promise((resolve, reject) => {
    const ReconectionDBpool = () => {
      poolCluster = mysql.createPoolCluster();
      poolCluster.add("node1", {
        host: "$DB_HOST1",
        user: "$DB_USER",
        password: "$DB_PASSWORD",
        database: "$DB_NAME",
      });
      poolCluster.add("node2", {
        host: "$DB_HOST2",
        user: "$DB_USER",
        password: "$DB_PASSWORD",
        database: "$DB_NAME",
      });
      poolCluster.getConnection(function (err, connection) {
        if (err) {
          if (err.code === "POOL_NOEXIST") {
            ReconectionDBpool();
          }
          console.log("connection:",connection);
        } else {
          connection.query(q, function (err, rows) {
            if (err) {
              reject(err);
            } else {
              connection.release();
              resolve(rows);
            }
          });
        }
      });
    };
    poolCluster.getConnection(function (err, connection) {
      if (err) {
        if (err.code === "POOL_NOEXIST") {
          ReconectionDBpool();
        } 
        else {
          reject(err);
        }
      } else {
        connection.query(q, function (err, rows) {
          if (err) {
            reject(err);
          } else {
            connection.release();
            resolve(rows);
          }
        });
      }
    });
  });
};

module.exports = {
  query,
};
