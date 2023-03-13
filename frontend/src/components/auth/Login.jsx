import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Login({
  handleToggle,
  handleVisible,
  visible,
  login,
  navigate,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      email: data.get("email"),
      password: data.get("password"),
    };
    login(userInfo, navigate);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            color="success"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            color="success"
            fullWidth
            name="password"
            label="Password"
            type={visible ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: visible ? (
                <VisibilityOffIcon
                  sx={{ color: "#0089ff", fontSize: 20, cursor: "pointer" }}
                  onClick={handleVisible}
                />
              ) : (
                <VisibilityIcon
                  sx={{ color: "#0089ff", fontSize: 20, cursor: "pointer" }}
                  onClick={handleVisible}
                />
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: blue[200],
              "&:hover": { bgcolor: blue[500] },
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Typography onClick={handleToggle} variant="body2">
                Don't have an account?{" "}
                <span style={{ color: "red", cursor: "pointer" }}>Sign Up</span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
