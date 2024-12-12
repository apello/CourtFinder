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
const createTables = (pool) => {
    // Get connection and execute query
    console.log('\n');
    console.log('/***** Creating tables *****/');
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection from pool:', err.message);
            return;
        }

        console.log('Connected to MySQL pool');
        // Execute the query
        connection.query(createUsersTable, (err, results) => {
            if (err) {
                console.error(`Error creating table: ${err.message}`);
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
    });
}

export default createTables; 