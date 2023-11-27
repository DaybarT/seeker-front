import StockList from "./Components/StockList";
import { useStock } from "../Context/StockContext";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/SessionContext";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import AddStockForm from "./Components/AddStockForm";
import NotLoggin from "../NotLoggin/NotLoggin";

function Stock() {
  const { isLoggedIn, user } = useAuth();
  const { ChargeStockByUser, addStock, stock } = useStock();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchZapas = async () => {
      try {

        if (!stock) {
          const data = await ChargeStockByUser();
        }

        // setZapas(data);
      } catch (error) {
        console.error("Error al cargar stock por usuario:", error);
      }
    };

    fetchZapas();
  }, [stock]);

  if (isLoggedIn && user) {
    
    return (
      <>
        <AddStockForm addStock={addStock} ChargeStockByUser={ChargeStockByUser} />
        {stock ? (
          <StockList stock={stock.stock}/>
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

export default Stock;
