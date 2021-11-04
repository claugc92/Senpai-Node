const express = require("express");
const axios = require("axios");
const PORT = 3000;
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) =>{
    return res.send("Hola");

});

app.get( "/users", (req, res) =>{
    const nombre = `${req.query.name}${req.query.lastName}`;
    return res.send(`Mi nombre es:${nombre}`);
});

app.get(`/users/:userId`, async (req, res) =>{
    const userId = req.params.userId;
    const response = await axios (`http://api.github.com/users/${userId}`);

    console.log(response.data);
    // el data es la condicion de axios para un objeto JSON

    return res.send({sucess: true, user: response.data});



});

app.get(`/repositorios/:userId`, (req, res) =>{
    try {
        const userId = req.params.userId;
        const response = await axios (`http://api.github.com/users/${userId}`);

        const reposUrl = response.data.repos_url;

        const respos = await axios(reposUrl);

        const reposName = [];

        repos.data.forEach((r) => {
            reposName = push(r.name);
            
        });

        return res.send({sucess: true, repositorios: reposName });
        
    } catch (error) {
        
    }
})

app.listen(PORT, ()=> console.log(`Escuchando en el puerto ${PORT}`));