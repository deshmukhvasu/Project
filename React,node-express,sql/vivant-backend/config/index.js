module.exports = {
  saltRounds: 10,
  jwtPrivateKey:
    "MIIBVQIBADA//NBgkqhkiG9w@0BA^QEFA&AS*CAT8wggE7AgEAAkEAsuYYLv2/UVG5c5Ga",
  endpoint: "/api/v1",
  port: 5005,
  noAuthRequired: ["/api/v1/addUser", "/api/v1/login"],
  tables: {
    users: "users",
    products: "products",
    cart: "cart",
  },
};
