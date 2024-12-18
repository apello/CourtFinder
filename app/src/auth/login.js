import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { validCredentials, authenticate } from "../common/utils";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Login = () => {
    // Set state variables 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);

    const signIn = useSignIn();
    const navigate = useNavigate();

    // Receive parameters from url
    const params = useLocation().state;
    useEffect(() => {
        if(params) setError(params.message);
    },[params]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop from from reloading page
        setError(""); // Clear message
        setPending(true); // Loading variable to give users feedback

        const credentials = { username,password };
        if(validCredentials(credentials)) {
            // Send credentials to back-end for authentication
            const response = await authenticate(credentials);
            if(response.token) {
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
                setPending(false);
                if (signInSuccess) {
                    // TODO: Add pending state
                    navigate("/dashboard");
                } else {
                    // Handle sign-in failure here
                    setError("Sign-in unsuccessful. Please try again!");
                }
            } else {
                // Handle errors 
                setError(`Error: ${response.error || "Something went wrong. Please try again!"}`);
            }
        } else {
            setError("Error: Please fill in all values!");
        }

        setPending(false); // Stop loading state after attempt
    };

    return (
        <>
            <Link to="/">Go home</Link>

            <h2>Login form:</h2>

            <p>{ pending ? "Loading..." : error }</p>
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
