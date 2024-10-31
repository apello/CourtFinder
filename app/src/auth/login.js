import { Link } from "react-router-dom";
import { useState } from "react";
import { validCredentials } from "../common/utils";

const Login = () => {
    // Set state variables for username, password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop from from reloading page

        const credentials = [username,password];
        if(validCredentials(credentials)) {
            alert("You have signed in!");
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