import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import createTables from "./schema.js";

// Routes
import authenticate from "./routes/authenticate.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

// Create tables
// createTables(pool);

// Login router
app.use("/", authenticate);

app.listen(port, () => {
   console.log(`\nServer listening at http://localhost:${port}`); 
});
