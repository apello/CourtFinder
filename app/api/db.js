import mysql2 from 'mysql2';
import dotenv from 'dotenv';

// Config for environment vars
dotenv.config();

// Create mysql connection pool
const pool = mysql2.createPool({
    host: process.env.REACT_APP_MYSQL_HOST,
    user: process.env.REACT_APP_MYSQL_USER,
    password: process.env.REACT_APP_MYSQL_PASSWORD,
    database: process.env.REACT_APP_MYSQL_DATABASE
});

// Export pool connection
export default pool;
