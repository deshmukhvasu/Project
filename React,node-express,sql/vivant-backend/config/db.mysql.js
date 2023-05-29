var mysql = require("mysql");


var pool = mysql.createPool({
  connectionLimit:4,
  host: "35.78.75.118",
  user: "test_user",
  password: "Test_123",
  database:"motivity"
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

const query = (q) => {
  return new Promise((resolve, reject) => {
          //  connection.query(q, function (err, rows) {
            pool.query(q, (err,data)=> {
           if (err) {
             reject(err);
           } else {
             resolve(data);
           }
        });
  })
}

 module.exports = {
   query,
 };

// var connection = mysql.createConnection({
//   host: "35.78.75.118",
//   user: "test_user",
//   password: "Test_123",
//   database : 'motivity'
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// const query = (q) => {
//   return new Promise((resolve, reject) => {
//            connection.query(q, function (err, rows) {
//            if (err) {
//              reject(err);
//            } else {
//              resolve(rows);
//            }
//         });
//   })

// }

//  module.exports = {
//    query,
//  };
// var poolCluster = mysql.createPoolCluster();
// poolCluster.add("node1", {
//   host: "$DB_HOST1",
//   user: "$DB_USER",
//   password: "$DB_PASSWORD",
//   database: "$DB_NAME",
// });
// poolCluster.add("node2", {
//   host: "$DB_HOST2",
//   user: "$DB_USER",
//   password: "$DB_PASSWORD",
//   database: "$DB_NAME",
// });

// const query = (q) => {
//   return new Promise((resolve, reject) => {
//     const ReconectionDBpool = () => {
//       poolCluster = mysql.createPoolCluster();
//       poolCluster.add("node1", {
//         host: "$DB_HOST1",
//         user: "$DB_USER",
//         password: "$DB_PASSWORD",
//         database: "$DB_NAME",
//       });
//       poolCluster.add("node2", {
//         host: "$DB_HOST2",
//         user: "$DB_USER",
//         password: "$DB_PASSWORD",
//         database: "$DB_NAME",
//       });
//       poolCluster.getConnection(function (err, connection) {
//         if (err) {
//           if (err.code === "POOL_NOEXIST") {
//             ReconectionDBpool();
//           }
//           console.log("connection:",connection);
//         } else {
//           connection.query(q, function (err, rows) {
//             if (err) {
//               reject(err);
//             } else {
//               connection.release();
//               resolve(rows);
//             }
//           });
//         }
//       });
//     };
//     poolCluster.getConnection(function (err, connection) {
//       if (err) {
//         if (err.code === "POOL_NOEXIST") {
//           ReconectionDBpool();
//         } 
//         else {
//           reject(err);
//         }
//       } else {
//         connection.query(q, function (err, rows) {
//           if (err) {
//             reject(err);
//           } else {
//             connection.release();
//             resolve(rows);
//           }
//         });
//       }
//     });
//   });
// };

// module.exports = {
//   query,
// };

