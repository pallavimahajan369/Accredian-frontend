import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";

const Signup = () => {
  const paperStyle = { padding: 50, width: 300, margin: "150px auto" };
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));

    // Validate email format
    if (name === "email" && value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("Invalid email format");
      } else {
        setError("");
      }
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!signup.username || !signup.email || !signup.password || !signup.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    // Check if passwords match
    if (signup.password !== signup.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check if there's an email validation error
    if (error) {
      alert(error);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/signup", signup);
      console.log(res);

      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle error, show alert, etc.
    }
  };

  return (
    <Grid container="center" style={{ backgroundColor: "#f50057", height: "100vh" }}>
      <Paper elevation={10} style={paperStyle}>
        <form>
          <Typography variant="h5">Signup</Typography>
          <TextField
            label="Username"
            placeholder="Enter Username"
            fullWidth
            required
            margin="normal"
            name="username"
            autoComplete="off"
            onChange={handleChange}
          />
          <TextField
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            margin="normal"
            name="email"
            autoComplete="off"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            margin="normal"
            name="password"
            autoComplete="off"
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            fullWidth
            required
            margin="normal"
            name="confirmPassword"
            autoComplete="off"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleClick}>
            Signup
          </Button>
          {error && <Typography variant="caption" color="error">{error}</Typography>}
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
