import React from "react";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { useAuth } from "../Context/SessionContext";
import { Container, CssBaseline } from "@mui/material";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotLoggin = () => {
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
      <Button onClick={returnClick}>INICIO</Button>
    </Container>
  );
};
export default NotLoggin;
