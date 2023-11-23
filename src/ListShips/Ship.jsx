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
        console.error("Error al cargar stock por usuario:", error);
      }
    };

    fetchShips();
  }, [ships]);

  return (
    <>
      {ships ? (
        <TableContainer sx={{ display: "flex", flexWrap: "wrap" }}>
          <AddShipForm AddShipsByUser={AddShipsByUser} />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center">NAME TRACK</TableCell>
                <TableCell align="center">TRACKING NUMBER</TableCell>
                <TableCell align="center"> SHIPPING COMPANIES</TableCell>
                <TableCell align="center">MORE ACTIONS</TableCell>
                <TableCell align="center">STATE</TableCell>
              </TableRow>

              <ShipList ships={ships}/>
              {/* pasarle el objeto */}
            </TableBody>
          </Table>
        </TableContainer>
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
}
export default Ship;
