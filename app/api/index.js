import cors from 'cors';
import express from 'express';
import mysql from './db.js'; // Mysql pool connection
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`); 
});