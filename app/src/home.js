/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/joy/Box";

// Import your image
import Court3 from "./Photos/Court3.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        padding: 2,
        gap: 3,
        backgroundColor: "#F0F0F0", // Optional light background for the whole page
      }}
    >
      {/* Left Side - Image */}
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

      {/* Right Side - Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 3,
          width: "50%",
          backgroundColor: "#FFFFFF", // White background
          color: "#000000", // Black text color
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional subtle shadow
        }}
      >
        <Typography color="primary" sx={{ fontSize: "lg", fontWeight: "lg" }}>
          Welcome to CourtFinder!
        </Typography>

        <Typography
          level="h1"
          sx={{
            fontWeight: "xl",
            fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
            color: "#000000", // Black for header
          }}
        >
          Discover, book, and play at your nearest courts with ease!
        </Typography>

        <Typography
          textColor="text.secondary"
          sx={{ fontSize: "lg", lineHeight: "lg", color: "#333333" }} // Dark gray text
        >
          Choose an option below to get started with your journey.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={RouterLink}
            to="/login"
            size="lg"
            variant="outlined"
            endDecorator={<ArrowForward fontSize="xl" />}
            sx={{ color: "#000000", borderColor: "#000000" }} // Black outline button
          >
            Log In
          </Button>
          <Button
            component={RouterLink}
            to="/signup"
            size="lg"
            variant="contained"
            endDecorator={<ArrowForward fontSize="xl" />}
            sx={{ backgroundColor: "#1976d2", color: "#FFFFFF" }} // Default button styling
          >
            Sign Up
          </Button>
        </Box>

        <Typography>
          Already a member?{" "}
          <Link
            component={RouterLink}
            to="/login"
            sx={{ fontWeight: "lg", color: "#1976d2" }} // Blue link
          >
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

