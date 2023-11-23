import * as React from "react";

import Button from "@mui/material/Button";
import style from "../Styles/ModalStyle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";

import { useEffect } from "react";

import { useAuth } from "../Context/SessionContext";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { isLoggedIn, user, forgotPassword } = useAuth();
  const navigate = useNavigate();

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
      console.error("Error durante el inicio de sesión:", error.message);
    }
  };


//   const updatePassword = async (event) => {
//     event.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     try {
//         const newPass = await handleUpdate(email,password);
//         console.log(newPass)
//         if (newPass){
//             navigate("/");
//         }
      
//     } catch (error) {
        
//     }
//   }


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
