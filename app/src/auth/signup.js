import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // stop from from reloading page
    
        alert(`This is what you entered: 
            ${name}, ${username}, ${email}, ${password}, ${confirm}
        `);
    };


    return (
        <>
            <Link to="/">Go home</Link>

            <h2>Sign up</h2>

            <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, border: "1px solid black", padding: 10 }}>
                    <label for="name">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name:" 
                        maxlength="50"
                        onChange={(e) => setName(e.target.value)} />

                    <label for="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email:" 
                        maxlength="50"
                        onChange={(e) => setEmail(e.target.value)} />
                    
                    <label for="username">Username:</label>
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
                    <label for="confirm">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirm" 
                        placeholder="Confirm your password:" 
                        maxlength="50"
                        onChange={(e) => setConfirm(e.target.value)} />
                    <input type="submit" />
                </div>
            </form>

            <br />
            <Link to="/login">Already have an account? Log in</Link>
        </>
    );
};

export default Signup;