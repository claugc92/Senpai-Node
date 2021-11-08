const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send({success: true, users: users});
});

router.post("/", (req, res) =>{
    const newUsers = req.body;
    if (newUsers.id && newUsers.name && newUsers.age){
        users.push(newUsers);
        res.send({success: true, users}); 
        
    } else {
        res.send({success: false, error: "Falta completar algún campo"}); 
        }
    // hasta aca estamos controlamos que el usuario nos envie todos los campos
});

// esta peticion nos ayuda a crear un objeto nuevo


router.put("/", (req, res) =>{

})

// el put nos permite modificar algo
module.exports = router;

const users = [
    {
        id: 1,
        name: "Juan Perez",
        age: 30,
    },
    {
        id: 2,
        name: "Marcelo Moreno",
        age: 25,

    },
    {
        id: 3,
        name: "Miguel Sanchez",
        age: 20,

    },
    {
        id: 4,
        name: "Claudio Gutierrez",
        age: 29,
    },
];