const cowsay = require("cowsay");

// Cuando queremos acceder a la libreria no se pone la terminal "./", simplemente en formato string utilizamos
// el nombre

console.log(
    cowsay.say({
    text: "Hola :D",
    e: "Oo",
    T: "U",
})
);
