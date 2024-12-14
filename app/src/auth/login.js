import { Link } from "react-router-dom";
import { useState } from "react";
import { validCredentials } from "../common/utils";
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const Login = () => {
    // Set state variables for username, password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // react-auth-kit
    const signIn = useSignIn();

    const authenticate = async (credentials) => {
        try {
            // Send request with user info to back-end
            const response = await fetch('http://localhost:8080/authenticate', {
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
                throw new Error(error.message); // Throw error with message
            }
    
            return await response.json(); // Return parsed JSON if successful
        } catch (error) {
            if (error.name === 'TypeError') {
                // Handle network-related errors specifically
                console.error('Network error:', error);
                throw new Error('Network error, please try again later.');
            }
    
            // Re-throw original error for other cases
            throw error;
        }
    };
        
    const handleSubmit = async (e) => {
        e.preventDefault(); // stop from from reloading page

        const credentials = { username,password };
        if(validCredentials(credentials)) {
            try {
                const response = await authenticate(credentials);

                // Doesn't work right now, but says success
                var signInSuccess = signIn({
                    auth: {
                        token: response.token,
                        type: 'Bearer'
                    }
                });
    
                if (signInSuccess) {
                    // Redirect or perform another action here
                    setError("Sign in successful!");
                } else {
                    // Handle sign-in failure here
                    setError("Login failed: sign-in failed.");
                }
            } catch(error) {
                // Handle  errors here
                console.log(error);
                setError(`Login failed: ${error}`);
            }
        } else {
            setError("Login failed: Please fill in all values!");
        }
    };

    return (
        <>
            <Link to="/">Go home</Link>

            <h2>Login form:</h2>

            <p>{error}</p>
            <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, border: "1px solid black", padding: 10 }}>
                    <label for="username">Username:</label>
                    {/* update the username everytime the input is changed, i.e., typed into */}
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter your username:" 
                        maxlength="50"
                        onChange={(e) => setUsername(e.target.value)} />

                    <label for="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password:"
                        maxlength="50"
                        onChange={(e) => setPassword(e.target.value)} />

                    <input type="submit" />
                </div>
            </form>

            <br />
            <Link to="/signup">Don't have an account? Sign up</Link>
        </>
    );
};

export default Login;
