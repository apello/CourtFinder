import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <Link to="/">Go home</Link>

            <h2>Sign up</h2>

            <form method="post">
                <div style={{ display: "flex", flexDirection: "column", gap: 5, border: "1px solid black", padding: 10 }}>
                    <label for="name">Name:</label>
                    <input type="text" name="name" placeholder="Enter your name:" />

                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="Enter your email:" />
                    
                    <label for="username">Username:</label>
                    <input type="text" name="username" placeholder="Enter your username:" />

                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Enter your password:" />

                    <label for="confirm">Confirm Password:</label>
                    <input type="password" name="confirm" placeholder="Confirm your password:" />

                    <input type="submit" />
                </div>
            </form>

            <Link to="/login">Already have an account? Log in</Link>
        </>
    );
};

export default Signup;