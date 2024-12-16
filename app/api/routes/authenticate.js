import express from "express";
import jwt from "jsonwebtoken";
import pool from "../db.js";
// import bcrypt from 'bcrypt';

var router = express.Router();

// TODO: move this to utils to be used for register also
const executeQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

router.post("/authenticate", async (req, res) => {
    const { username, password } = req.body;
    // TODO: Switch to ORMs
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";

    try {
        // Query database
        const data = await executeQuery(query, [username, password]);

        // Check length
        if(data.length === 0){
            return res.status(404).json({ message: "Email/password do not match." })
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
        res.json({ message: "Success", token: jwtToken });
    } catch(error) {
        return res.status(500).json({
            message: "Query execution failed.",
            details: error
        });
    }
});

export default router;