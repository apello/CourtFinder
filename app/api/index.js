import cors from 'cors';
import express from 'express';
import pool from './db.js'; // Mysql pool connection
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res){
    res.send(`Request recieved! You sent: ${req.body["name"]}, ${req.body["username"]}, ${req.body["email"]}, ${req.body["password"]}.`);
 });

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