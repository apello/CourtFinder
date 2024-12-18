const server = 'http://localhost:8080';

// TODO: Make generic for sign-up
export const validCredentials = (credentials) => {
    const { username, password } = credentials;
    return username.trim() && password.trim(); // Ensure non-empty strings
};

// For testing load times. Ex: await sleep(1000);
export const sleep = async (ms) => {
    return await new Promise(resolve => setTimeout(resolve, ms || 1000));
};

// For querying data from the database
export const executeQuery = (pool, query, params) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

// Try to login
// HTTP POST
export const authenticate = async (credentials) => {
    // Send request with user info to back-end
    const response = await fetch(`${server}/authenticate`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    return await response.json();
};

// Return all listings
// HTTP GET
export const getListings = async () => {
    const response = await fetch(
        `${server}/listings`
    );

    return await response.json();
}
    