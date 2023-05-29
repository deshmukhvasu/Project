const express = require("express");
const router = express.Router();
const {
  addUser,
  login,
  getproducts,
  updateCart,
  getCart,
} = require("./user.ctrl");
router.post("/addUser", addUser);
router.post("/login", login);
router.get("/getproducts", getproducts);
router.post("/updateCart", updateCart);
router.get("/getCart", getCart);

module.exports = router;
