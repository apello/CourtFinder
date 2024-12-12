import { Link } from "react-router-dom";
import { useState } from "react";
import { validCredentials } from "../common/utils";
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const authenticate = (credentials) => {
    const response = fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials), // Send `this.state` as the body of the request
    });

    return response;
};

const Login = () => {
    // Set state variables for username, password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // react-auth-kit
    const signIn = useSignIn();
    
    const handleSubmit = async (e) => {
        e.preventDefault(); // stop from from reloading page

        const credentials = [username,password];
        if(validCredentials(credentials)) {
            authenticate(credentials).then(async (res) => {
                if (res.ok) {
                    const data = await res.json(); // Parse response JSON
        
                    const signInSuccess = signIn({
                        auth: {
                            token: data.token, // Assuming `token` is returned from API
                            type: 'Bearer',
                        },
                        refresh: data.refreshToken, // Assuming `refreshToken` is returned from API
                        userState: {
                            name: data.userName, // Replace with actual data from API
                            uid: data.userId,    // Replace with actual data from API
                        },
                    });
        
                    if (signInSuccess) {
                        // Redirect or perform another action here
                        console.log("Sign in successful!");
                    } else {
                        // Handle sign-in failure here
                        console.error("Sign-in failed.");
                    }
                } else {
                    // Handle response errors here, e.g., invalid credentials
                    console.error("Login failed with status:", res.status);
                }
            })
            .catch((error) => {
                // Handle network errors here
                console.error("Error during login:", error);
            });
        } else {
            alert("Please fill in all values!");
        }
    };

    return (
        <>
            <Link to="/">Go home</Link>

            <h2>Login form:</h2>
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