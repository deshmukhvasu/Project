const { passwordHash, verifyPassword } = require("../helper/bcryptPassword");
const userQuery = require("./user.query");
const { generateToken, jwtDecode } = require("../helper/jwtToken");

exports.addUser = async (req, res) => {
  try {
    const password = await passwordHash(req.body.password);
    const q = userQuery.createUaser({
      password: password,
      email: req.body.email,
      name: req.body.name,
    });

    const resp = await poolQuery(q);

    responseHandler.successResponse(res, resp, "Create");
  } catch (err) {
    responseHandler.errorResponse(res, err, commonErrorMessage);
  }
};

exports.login = async (req, res) => {
  try {
    const q = userQuery.getUser(req.body.email);
    const resp = await poolQuery(q);
    if (resp && resp.length) {
      const empData = {
        name: resp[0].name,
        email: resp[0].email,
        user_id: resp[0].user_id,
      };
      const token = generateToken(empData);
      responseHandler.successResponse(res, { ...resp[0], token }, "Create");
    } else {
      responseHandler.errorResponse(res, "user not found", "user not found");
    }
  } catch (err) {
    responseHandler.errorResponse(res, err, commonErrorMessage);
  }
};

exports.getproducts = async (req, res) => {
  try {
    const q = userQuery.getproducts();
    const resp = await poolQuery(q);
    responseHandler.successResponse(res, resp, "Products");
  } catch (err) {
    responseHandler.errorResponse(res, err, commonErrorMessage);
  }
};

exports.updateCart = async (req, res) => {
  try {
    const payload = {
      product_id: req.body.product_id,
      user_id: req.user.user_id,
      qunatity: req.body.qunatity,
    };
    const q1 = userQuery.checkCart(payload);
    const resp1 = await poolQuery(q1);
    if (resp1 && resp1.length) {
      const q2 = userQuery.updateCart({
        cart_id: resp1[0].cart_id,
        qunatity: req.body.qunatity,
      });
      const resp2 = await poolQuery(q2);
      responseHandler.successResponse(res, resp2, "Cart update");
    } else {
      const q2 = userQuery.addCart({ ...payload });
      const resp2 = await poolQuery(q2);
      responseHandler.successResponse(res, resp2, "Cart update");
    }
  } catch (err) {
    responseHandler.errorResponse(res, err, commonErrorMessage);
  }
};
exports.getCart = async (req, res) => {
  try {
    const q = userQuery.getCart(req.user.user_id);
    const resp = await poolQuery(q);
    responseHandler.successResponse(res, resp, "Cart update");
  } catch (err) {
    responseHandler.errorResponse(res, err, commonErrorMessage);
  }
};
