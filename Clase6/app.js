// Requiero liberia

const express = require("express");

// 2 Inicio Express
const app = express();

//3 Subo el PUERTO
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    req.now = new Date();
    console.log(req.now);
    next();
});


app.get("/", (req, res) => {
    res.send(":D");

});

app.get("/tienda", (req, res, next) =>{
    setTimeout(() => {
        try {
            
        } catch (error) {
            return next(error);
        }
    }, 1000);
});

app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});
