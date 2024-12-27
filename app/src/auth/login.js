import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { validCredentials, authenticate } from "../common/utils";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Alert from "@mui/joy/Alert";
import Divider from "@mui/joy/Divider";

// Import background image
import Court3 from "../Photos/Court3.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const signIn = useSignIn();
  const navigate = useNavigate();
  const location = useLocation();
  const params = location.state;

  useEffect(() => {
    if (params) setError(params.message);
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPending(true);

    const credentials = { username, password };
    if (validCredentials(credentials)) {
      const response = await authenticate(credentials);
      if (response.token) {
        const signInSuccess = signIn({
          auth: {
            token: response.token,
            type: "Bearer",
          },
          userState: { username },
        });

        setPending(false);
        if (signInSuccess) {
          navigate("/dashboard");
        } else {
          setError("Sign-in unsuccessful. Please try again!");
        }
      } else {
        setError(`Error: ${response.error || "Something went wrong. Please try again!"}`);
      }
    } else {
      setError("Error: Please fill in all values!");
    }

    setPending(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#F0F0F0",
      }}
    >
      {/* Left Side with Image */}
      <Box
        component="img"
        src={Court3}
        alt="Court"
        sx={{
          width: "50%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Right Side with Form */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
            <Typography level="h2" sx={{ marginBottom: 2 }}>
                Login
            </Typography>

            {error && <Alert color="danger" sx={{ marginBottom: 2 }}>{error}</Alert>}

            <form
                onSubmit={handleSubmit}
                style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "400px",
                gap: "1rem",
                }}
            >
                <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <Button type="submit" disabled={pending} variant="solid">
                {pending ? "Loading..." : "Log In"}
                </Button>

                <Divider sx={{ width: "100%", margin: "2rem 0" }}>or</Divider>
                <RouterLink to="/forgot-password">Forgot password?</RouterLink>

                <input type="submit" />
                </form>

            <Typography>
                Don't have an account?{" "}
                <RouterLink to="/signup" style={{ textDecoration: "none", color: "#1976D2" }}>
                Sign up
                </RouterLink>
            </Typography>

            <RouterLink to="/" style={{ textDecoration: "none", marginTop: "1rem", color: "#1976D2" }}>
                Go home
            </RouterLink>
        </Box>
    </Box>
  );
};

export default Login;
