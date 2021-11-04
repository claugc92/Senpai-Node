const express = require("express");
const app = express();
const PORT = 5000;
express.Router()


app.listen(PORT, ()=> {
    console.log(`Escuchando el puerto ${PORT}`)
})