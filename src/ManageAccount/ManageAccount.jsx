import * as React from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../Context/SessionContext";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
const CloudName = import.meta.env.VITE_CLOUD_NAME;
import { Avatar } from "@mui/material";
import style from "../Styles/ModalStyle.jsx";


export default function ManageAccount() {
  const { isLoggedIn, user, handleUpdate } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: CloudName,
    },
  });

  const myImage = cld.image(user?.image);
  const urlImage = myImage.publicID;

  const manageSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullname = document.getElementById("fullname").value;

    try {
      const user = await handleUpdate(email, password, fullname);
      if (user) {
        handleOpen();
      }
    } catch (error) {
      console.error("Error al actualizar:", error.message);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn && user) {
    return (
     
        <Container component="main" maxWidth="xs">
          
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              {user.username}
            </Typography>

            <Box
              component="form"
              onSubmit={manageSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
             
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                placeholder={user.email}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Full Name"
                placeholder={user.fullName}
                type="name"
                id="fullname"
                autoComplete="name"
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Click Here for update
              </Button>
            </Box>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                UPDATED
              </Box>
            </Modal>
          </Box>
        </Container>
    
    );
  }
}
