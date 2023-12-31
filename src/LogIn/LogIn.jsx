import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Error from "../Error/Error";
import { useState } from "react";

import { useAuth } from "../Context/SessionContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { handleLogin, isLoggedIn, user, handleLogout, authenticateUser } =
    useAuth();
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    try {
      const user = await handleLogin(email, password, remember);
    } catch (error) {
      //tal vez poner un modal con el mensaje de error
      console.error("Error durante el inicio de sesión:", error.message);
      setErrorState(`Error durante el inicio de sesión: ${error.message}`);
      console.log(error)
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/Home");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn || !user) {
    return (
      <>
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
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              id="remember"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           
            <Grid container>
              {/* AÑADE EL FORGOT PASSWORD */}
              <Grid item xs>
                <Link to="/ForgotPassword">Forgot Password?</Link>
              </Grid>
              <Grid item>
                {/* AÑADE EL REGISTRO */}
                <Link to="/Register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
            {errorState && <Error>{errorState}</Error>}
          </Box>
        </Box>
      </>
    );
  }
}
