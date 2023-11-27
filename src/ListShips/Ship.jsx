import React, { useEffect, useState } from "react";
import ShipList from "./Components/ShipList";
import {
  Card,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import AddShipForm from "./Components/AddShipForm";
import { useAuth } from "../Context/SessionContext";
import { useShip } from "../Context/ShipContext";
import { Container } from "@mui/material";
import NotLoggin from "../NotLoggin/NotLoggin";
import { Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Ship() {
  const { handleLogin, isLoggedIn, user } = useAuth();
  const { AddShipsByUser, ChargeShipsByUser, ships } = useShip();

  useEffect(() => {
    const fetchShips = async () => {
      try {
        if (!ships) {
          // Verifica si 'ships' es null, undefined o una lista vacía
          const data = await ChargeShipsByUser();
        }
      } catch (error) {
        console.error("Error al cargar los envios por usuario:", error);
      }
    };

    fetchShips();
  }, [ships]);
  if (isLoggedIn && user) {
    return (
      <>
        {ships ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AddShipForm AddShipsByUser={AddShipsByUser} />

            <br />

            
             
               

                <ShipList ships={ships} />
               
            
          </div>
        ) : (
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
            <Box style={{ fontSize: 50 }}>LOADING...</Box>
          </Container>
        )}
      </>
    );
  } else {
    return <NotLoggin />;
  }
}
export default Ship;
