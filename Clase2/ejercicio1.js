const fs = require("fs")

const data = fs.readFileSync("text.txt");
//  No necesitamos instalar esta libreria, lo tiene node
// Nos ayuda a acceder a archivos fs
console.log(data.toString());
// con toString lo convertimos en una cadena de
// texto
console.log("Programa terminado");

fs.readFile("text.txt", function name (error, data){
        if (error)
            return console.log(error);

        console.log(data.toString());
    });

console.log("Programa terminado");