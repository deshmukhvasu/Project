const { tables } = require("../config");
exports.createUaser = ({ password, email, name }) => {
  return `insert into ${tables.users} (name,email,password) values 
  ('${name}','${email}','${password}')`;
};

exports.getUser = (email) => {
  return `  select * from ${tables.users}  where email = '${email}'`;
};
exports.getproducts = () => {
  return `select * from ${tables.products}`;
};

exports.checkCart = ({ product_id, user_id }) => {
  return `select * from ${tables.cart} where product_id=${product_id} and user_id = ${user_id} `;
};

exports.updateCart = ({ cart_id, qunatity }) => {
  if (!qunatity) {
    return `DELETE FROM ${tables.cart} WHERE cart_id=${cart_id}`;
  } else {
    return `UPDATE ${tables.cart}
        SET qunatity = ${qunatity}
        WHERE cart_id=${cart_id}`;
  }
};
exports.addCart = ({ product_id, user_id, qunatity }) => {
  return `insert into ${tables.cart} (product_id,user_id,qunatity) values 
    (${product_id},${user_id},${qunatity})`;
};

exports.getCart = (user_id) => {
  return `select * from ${tables.cart} where user_id=${user_id}`;
};
