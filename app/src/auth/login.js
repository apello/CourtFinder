import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Link to="/">Go home</Link>

            <h2>Login form:</h2>
            <form method="post">
                <div style={{ display: "flex", flexDirection: "column", gap: 5, border: "1px solid black", padding: 10 }}>
                    <label for="username">Username:</label>
                    <input type="text" name="username" placeholder="Enter your username:" />

                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Enter your password:" />

                    <input type="submit" />
                </div>
            </form>

            <Link to="/signup">Don't have an account? Sign up</Link>
        </>
    );
};

export default Login;