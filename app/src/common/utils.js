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