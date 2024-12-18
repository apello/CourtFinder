// TODO: Make generic for sign-up
export const validCredentials = (credentials) => {
    const { username, password } = credentials;
    return username.trim() && password.trim(); // Ensure non-empty strings
};

// For testing load times. Ex: await sleep(1000);
export const sleep = async (ms) => {
    return await new Promise(resolve => setTimeout(resolve, ms || 1000));
};

// Try to login
// HTTP POST
export const authenticate = async (credentials) => {
    // Send request with user info to back-end
    const response = await fetch('http://localhost:8080/authenticate', { // Url for server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    return response.json();
};
    