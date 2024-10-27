const express = require('express');
const app = express();
const mysql = require('mysql');


app.use(express.json());

const db = mysql.createPool({
 connectionLimit: 10,
 host : 'localhost',
 user : 'sql5740788',
 password : '',
 database : ''

});
