const utils = require("./util");

// cuando queremos exportar ponemos module.exports,
// y para requirirlo con require entre comillas porque
// lo toma como un string

utils.carrito.forEach((c) => console.log(c));

console.log(utils.suma(1, 3));