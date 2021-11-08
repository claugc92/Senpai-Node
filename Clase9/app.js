const express = require("express");
const app = express();
const PORT = 4000;
const userRouters = require("./routers/users");


app.use(express.json());
app.use(express.urlencoded({
    extended: true,
})
);
// esto nos permite que la app reconozca y entienda los archivos json
app.get("/", (req, res)=>{
    res.send("Hola, mundo :D");
});


app.use("/users", userRouters);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
});