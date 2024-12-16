import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { validCredentials } from "../common/utils";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Login = () => {
    // Set state variables for username, password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const signIn = useSignIn();
    const navigate = useNavigate();

    // Receive parameters from url
    const params = useLocation().state;
    useEffect(() => {
        if(params) setError(params.message);
    },[params]);

    const authenticate = async (credentials) => {
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
                throw new Error(error.message); // Throw error with message
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
        
    const handleSubmit = async (e) => {
        e.preventDefault(); // stop from from reloading page

        setError(""); // Clear message

        const credentials = { username,password };
        if(validCredentials(credentials)) {
            try {
                const response = await authenticate(credentials);

                // Use react-auth-kit sign-in function
                var signInSuccess = signIn({
                    auth: {
                        token: response.token,
                        type: 'Bearer'
                    },
                    userState: { // TODO: Add some more user data
                        username: username
                    }
                });
    
                // Redirect to dashboard
                if (signInSuccess) {
                    // TODO: Add pending state
                    navigate("/dashboard");
                } else {
                    // Handle sign-in failure here
                    setError("Sign-in unsuccessful. Please try again!");
                }
            } catch(error) {
                // Handle  errors 
                console.log(error);
                setError(error.message);
            }
        } else {
            setError("Error: Please fill in all values!");
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