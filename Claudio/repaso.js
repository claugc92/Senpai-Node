const numeroAleatorio = Math.round(Math.random() * 10);

console.log(numeroAleatorio);

let numeroElegido = prompt("Elije un numero del 1 al 10");
if (numeroElegido === numeroAleatorio){
    alert("Felicidades");
} else if(numeroElegido < numeroAleatorio){
    alert("Es menor");
}
else if(numeroElegido > numeroAleatorio){
    alert("Es mayor");
};

// el === es decir si son exactamente iguales valor y variable;
// el prompt retorna un string;
// parseInt(numeroElegido, 10); esto nos convierte en un valor numerico.