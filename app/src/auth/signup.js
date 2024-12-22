import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Alert from "@mui/joy/Alert";
import Divider from "@mui/joy/Divider";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !username || !password || !confirm) {
      setError("Please fill in all fields!");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    setSuccess("You have been successfully registered!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#F9F9F9",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: 4,
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography level="h2" sx={{ textAlign: "center", marginBottom: 2 }}>
          Sign Up
        </Typography>

        {error && <Alert color="danger" sx={{ marginBottom: 2 }}>{error}</Alert>}
        {success && <Alert color="success" sx={{ marginBottom: 2 }}>{success}</Alert>}

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <Button type="submit" variant="solid" fullWidth>
            Sign Up
          </Button>
        </form>

        <Divider sx={{ margin: "2rem 0" }}>or</Divider>

        <Typography textAlign="center">
          Already have an account?{" "}
          <RouterLink to="/login" style={{ textDecoration: "none", color: "#1976D2" }}>
            Log in
          </RouterLink>
        </Typography>

        <RouterLink to="/" style={{ textDecoration: "none", marginTop: "1rem", display: "block", textAlign: "center", color: "#1976D2" }}>
          Go home
        </RouterLink>
      </Box>
    </Box>
  );
};

export default Signup;
