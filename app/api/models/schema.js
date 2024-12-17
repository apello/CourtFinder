// Schema
const createUsersTable = 
    `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );`
;

const createListingsTable = 
    `CREATE TABLE IF NOT EXISTS listings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT NULL,
        price_per_hour DECIMAL(10,2) NOT NULL,
        available_days VARCHAR(50) NOT NULL,
        available_start_time TIME NOT NULL,
        available_end_time TIME NOT NULL,
        show_address BOOLEAN DEFAULT FALSE,
        street_address VARCHAR(255) NULL,
        city VARCHAR(100) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );`
;

// Create tables
const createTables = (pool) => {
    // Get connection and execute query
    pool.getConnection((err, connection) => {
        console.log('\n/***** Creating tables *****/');

        if (err) {
            console.error('Error getting connection from pool:', err.message);
            return;
        }
        console.log('\nConnected to MySQL pool');

        // Create users table
        connection.query(createUsersTable, (err, results) => {
            console.log("");

            if (err) {
                console.error(`Error creating "users" table: ${err.message}`);
            } else {
                console.log('Table "users" created successfully');
            }

            // Release the connection back to the pool
            connection.release();

            if (err) {
                console.error('Error releasing connection:', err.message);
            } else {
                console.log('Connection released back to pool');
            }
        });

        // Create listings table
        connection.query(createListingsTable, (err, results) => {
            console.log("");

            if (err) {
                console.error(`Error creating "listings" table: ${err.message}`);
            } else {
                console.log('Table "listings" created successfully');
            }

            // Release the connection back to the pool
            connection.release();

            if (err) {
                console.error('Error releasing connection:', err.message);
            } else {
                console.log('Connection released back to pool');
            }
        });
    });
}

export default createTables; 