import express from "express";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import { executeQuery } from "../../src/common/utils.js";
// import bcrypt from 'bcrypt';

var router = express.Router();

router.post("/authenticate", async (req, res) => {
    const { username, password } = req.body;
    // TODO: Switch to ORMs
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";

    // Query database
    const data = await executeQuery(pool, query, [username, password]);

    // Throw errors
    if(!data) {
        return res.status(500).json({ error: "Unable to connect to network" });
    }

    if(!data.length){
        return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare passwords
    // const isMatch = await bcrypt.compare(password, user.password);
    // if(!isMatch){
    //     return res.status(500).json({ message: "Email/password do match." })
    // }

    const user = data[0];

    // Create hashed user token
    const jwtToken = jwt.sign(
        { 
            id: user.id, 
            name: user.name, 
            username: user.username, 
            email: user.email
        },
        process.env.JWT_SECRET, // Randomly generated hash, check .env
        { expiresIn: '1h' }, // Token needs expiration or else login will not work
    );

    // Send token to login
    res.json({ token: jwtToken });
});

export default router;