const express = require("express");
const app = express();
const PORT = 5000;
const axios = require("axios");

app.get("/", async (req, res)=>{

    const response = await axios("https://api.coindesk.com/v1/bpi/currentprice.json");

    return res.send(response.data);

});

app.listen(PORT, () =>{
    console.log(`Escuchando desde el puerto ${PORT}`);
});
