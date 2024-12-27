import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

// Database connection/creation
import pool from './db.js';
import createTables from './models/schema.js';

// Routes
import loginHandler from "./routes/loginHandler.js";
import listingsHandler from "./routes/listingsHandler.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

// Create tables - you can comment this out after creating tables
// createTables(pool);

// Routes
app.use("/", loginHandler); // Login
app.use("/", listingsHandler); // Listings

app.listen(port, () => {
   console.log(`\nServer listening at http://localhost:${port}`); 
});
