import * as React from "react";

import Button from "@mui/material/Button";
import style from "../Styles/ModalStyle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";

import { useAuth } from "../Context/SessionContext";
import { useNavigate } from "react-router-dom";

export default function ChangePass() {
  const { isLoggedIn, user, updatePassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const goUpdatePass = async (event) => {
    event.preventDefault();

    const email = location.state?.email || "";

    const password = document.getElementById("password").value;
    try {
      const newPass = await updatePassword(email, password);
      if (newPass) {
        navigate("/");
      }
    } catch (error) {}
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
          onSubmit={goUpdatePass}
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            UPDATE
          </Button>
        </Box>
      </>
    );
  }
}
