import { pool } from "db.js";

// Schema
const createUsersTable = 
    `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      username VARCHAR(100) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )`
;

// Create tables
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection from pool:', err.message);
        return;
    }

    console.log('Connected to MySQL pool');

    // Execute the query
    connection.query(createUsersTable, (err, results) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table "users" created successfully');
        }

        // Release the connection back to the pool
        connection.release();
    });
});

// Close the pool when the application exits
process.on('SIGINT', () => {
    pool.end((err) => {
        if (err) {
            console.error('Error closing the pool:', err.message);
        } else {
            console.log('Pool closed successfully');
        }

        process.exit(0);
    });
});