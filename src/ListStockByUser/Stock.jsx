import StockList from "./Components/StockList";
import { useStock } from "../Context/StockContext";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/SessionContext";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import AddStockForm from "./Components/AddStockForm";

function Stock() {
  const { isLoggedIn, user } = useAuth();
  const { ChargeStockByUser, addStock } = useStock();
  const [zapas, setZapas] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchZapas = async () => {
      try {
        const data = await ChargeStockByUser();

        setZapas(data);
      } catch (error) {
        console.error("Error al cargar stock por usuario:", error);
      }
    };

    fetchZapas();
  }, [ChargeStockByUser]);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate]);


  if (isLoggedIn && user) {
    return (
      <>
        <AddStockForm addStock={addStock} />
        {zapas ? (
          <StockList zapas={zapas.stock} />
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
}

export default Stock;
