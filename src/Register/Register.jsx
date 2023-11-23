import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../Context/SessionContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "@mui/material";
import style from "../Styles/ModalStyle";

export default function Register() {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;

    try {
      const user = await handleRegister(email, password, fullname, username);
      console.log(user);
      if (user) {
        handleOpen();
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error.message);
    }
  };

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="fullname"
            label="Full Name"
            type="text"
            id="fullname"
            autoComplete="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="text"
            id="username"
            autoComplete="username"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              {/* AÑADE EL REGISTRO */}
              <Link to="/">You have account? Log In</Link>
            </Grid>
          </Grid>
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Box onSubmit={handleRegister} sx={style}>
            WELCOME ABOARD! YOU'RE NOW PART OF OUR COMMUNITY.
          </Box>
        </Modal>
      </Box>
    </>
  );
}
