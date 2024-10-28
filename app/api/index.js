import cors from 'cors';
import express from 'express';
import pool from './db.js'; // Mysql pool connection

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/select', (req,res) => {
    const query = "SELECT * FROM users";
    pool.getConnection((err,db) => {
        if(err) return res.json(err);

        db.query(query, (err,data) => {
            if(err) return res.json(err);
            return res.json(data);
        });
    })   
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`); 
});