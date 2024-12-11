import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import pool from "./db.js";
import { createTables } from "./schema.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

// Create tables
createTables(pool);

// Login router
var login = require("./login.js");
app.use("/login", login);

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`); 
});