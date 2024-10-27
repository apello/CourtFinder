import mysql from 'mysql';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "sql5.freemysqlhosting.net",
    user: "sql5740788",
    password: "lMRMCaTiRZ",
    database: "users"
});

app.get('/', (req,res) => {
    res.json({ message: "ok" });
});

app.post('/select', (req,res) => {
    const query = "SELECT * FROM users";
    db.query(query, (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`); 
});