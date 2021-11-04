const express = require("express");
const app = express();
const PORT = 45000;

app.get("/", (req, res) => {
res.send("Hello Word!");
});


app.listen(PORT, () =>{
    console.log(`Corriendo en http://localhost:${PORT}`);

});

