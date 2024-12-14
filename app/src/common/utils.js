export const validCredentials = (credentials) => {
    const { username, password } = credentials;
    return username.trim() && password.trim(); // Ensure non-empty strings
};

