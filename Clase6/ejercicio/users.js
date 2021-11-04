const fs = require("fs");
const listarUsuarios = require("./user");

const listadeUsuarios = listarUsuarios

fs.readFile("./users.json", "", (err, users) => {
  if (err) {
    reject(err);
  }

  const userJson = JSON.parse(users);
  resolve(userJson);
});