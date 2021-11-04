const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error);
    };

});

app.listen(PORT, ()=> console.log(`Escuchando en el puerto ${PORT}`));