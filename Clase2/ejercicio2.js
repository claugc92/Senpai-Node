const { callbackify } = require("util");

setTimeout(() => {
    console.log("Primero time")
}, 1000);

setTimeout(() => {
    console.log("Segundo time")
}, 1000);

    // El EventLoop primero ejecuta el codigo
    // Sincrono, pasa para que se evalue el 
    // Asincrono y luego lo ejecuta (Se hace por 
    // debajo)


console.log("Comienza el programa");


console.log("Termina el programa");

// Callback 

// 1. en un segundo, termina de ejecutarse. Listo para 
// llamarse desde el event loop 
// 2. en un segundo, termina de ejecutarse. Listo para 
// llamarse desde el event loop  

