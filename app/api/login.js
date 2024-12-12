var express = require("express");
const jwt = require("jsonwebtoken");
var pool = require("../api/db.js");

var router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    res.json({ message: `${req}`});

    const user = null;
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    pool.getConnection((err,db) => {
        if(err) return res.json(err);

        db.query(query, (err,data) => {
            if(err) user = res.json(err);
            user = res.json(data);
        });
    })   

    res.json({ message: `${user}`});

    


    // if(!user){
    //     return res
    //         .status(400)
    //         .json({ message: "Email or password does not match!" });
    // }

    // if(user.password !== password){
    //     return res
    //         .status(400)
    //         .json({ message: "Email or password does not match!" });
    // }

    // const jwtToken = jwt.sign(
    //     { 
    //         id: user.id, 
    //         name: user.name, 
    //         username: user.username, 
    //         email: user.email 
    //     },
    //     process.env.JWT_SECRET
    // );

    // res.json({ message: "Success", token: jwtToken });
});

module.exports = router;