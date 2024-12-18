// TODO: Make generic for sign-up
export const validCredentials = (credentials) => {
    const { username, password } = credentials;
    return username.trim() && password.trim(); // Ensure non-empty strings
};

/**
 * Function for testing load times. Ex: await sleep(1000);
 * @param {*} ms 
 * @returns Promise(setTimeout(ms))
 */
export const sleep = async (ms) => {
    return await new Promise(resolve => setTimeout(resolve, ms || 1000));
};


// Try to login
// HTTP POST
export const authenticate = async (credentials) => {
    try {
        // Send request with user info to back-end
        const response = await fetch('http://localhost:8080/authenticate', { // Url for server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        // Check for error
        if (!response.ok) {
            const error = await response.json();
            console.error('Response error:', error.message);
            throw new Error(error.message || "Failed to authenticate"); // Throw error with message
        }

        return await response.json(); // Return parsed JSON if successful
    } catch (error) {
        // Check if network error
        if (error.name === 'TypeError') {
            // Handle network-related errors specifically
            console.error('Network error:', error);
            throw new Error('Network error, please try again later.');
        }

        // Else re-throw original error
        throw error;
    }
};
    