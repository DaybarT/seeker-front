import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { useAuth } from "../Context/SessionContext";
import { Container, CssBaseline } from "@mui/material";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function NotFound() {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const returnClick = () => {
    navigate("/");
  };

  return (
    <Container
      component="main"
      style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column", // Alinear elementos en columna
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Establecer la altura al 100% de la ventana
      }}
    >
      <Box mb={2}>
        <DangerousIcon style={{ fontSize: 80 }} />
      </Box>{" "}
      {/* Agregar espacio en la parte inferior */}
      <Box style={{ fontSize: 50 }}>404 NOT FOUND</Box>{" "}
      {/* Agregar espacio en la parte inferior */}
      <Button onClick={returnClick}>INICIO</Button>
    </Container>
  );
}
