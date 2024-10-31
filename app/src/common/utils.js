export const validCredentials = (credentials) => {
    for(let value of credentials) 
        if(value === "") return false;

    return true;
};