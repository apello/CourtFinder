/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/joy/Box";

// Import your background image
import Court1 from "./Photos/Court1.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 2,
        gap: 3,
        backgroundImage: `url(${Court1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white", // Ensures text is visible on top of the image
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
        }}
      >
        Discover, book, and play at your nearest courts with ease!
      </Typography>

      <Typography
        textColor="text.secondary"
        sx={{ fontSize: "lg", lineHeight: "lg", color: "inherit" }}
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
          sx={{ color: "white", borderColor: "white" }}
        >
          Log In
        </Button>
        <Button
          component={RouterLink}
          to="/signup"
          size="lg"
          variant="contained"
          endDecorator={<ArrowForward fontSize="xl" />}
        >
          Sign Up
        </Button>
      </Box>

      <Typography>
        Already a member?{" "}
        <Link
          component={RouterLink}
          to="/login"
          sx={{ fontWeight: "lg", color: "white" }}
        >
          Log in
        </Link>
      </Typography>
    </Box>
  );
};

export default Home;
