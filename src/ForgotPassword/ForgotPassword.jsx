import * as React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Error from "../Error/Error";

import { useEffect } from "react";

import { useAuth } from "../Context/SessionContext";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { isLoggedIn, user, forgotPassword } = useAuth();
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState();

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    try {
      const changePass = await forgotPassword(email);
      if (changePass) {
        navigate("/ChangePass", { state: { email } });
      }
    } catch (error) {
      //tal vez poner un modal con el mensaje de error
      setErrorState(error.message);
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
          component="form"
          onSubmit={handleForgotPassword}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          FORGOT PASSWORD
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Check Email
          </Button>
          {errorState && <Error>{errorState}</Error>}
          <Grid>
            <Grid>
              <Link to="/">Log In</Link>
            </Grid>
            <Grid>
              <Link to="/Register">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
