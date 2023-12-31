import ProductList from "./Components/ProductList";
import { useStock } from "../Context/StockContext";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/SessionContext";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
//te va a tocar pasar el toquen o el user.username para que el back entienda de alguna manera
//que quieres ver tu stock, y necesita ese parametro...
import { TextField } from "@mui/material";
import NotLoggin from "../NotLoggin/NotLoggin";

function Product() {
  const { handleLogin, isLoggedIn, user, handleLogout, authenticateUser } =
    useAuth();
  const { chargeAllMarket } = useStock();
  const [zapas, setZapas] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchZapas = async () => {
      try {
        const data = await chargeAllMarket();
        console.log(data);

        setZapas(data);
      } catch (error) {
        console.error("Error al cargar stock por usuario:", error);
      }
    };

    fetchZapas();
  }, []);

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  let productosFiltrados = [];

  if (searchInput.length > 0 && zapas && zapas.products) {
    productosFiltrados = zapas.products.filter((producto) => {
      // Filtrar por los campos 'model' o 'SKU'
      const isInModel = producto.model
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const isInSKU = producto.SKU.toLowerCase().includes(
        searchInput.toLowerCase()
      );

      return isInModel || isInSKU;
    });
  }

  if (isLoggedIn && user) {
    return (
      <>
        <TextField
          type="search"
          placeholder="Search model"
          onChange={handleChange}
          value={searchInput}
          sx={{ marginLeft: 16 }}
        />
        {searchInput.length > 0 ? (
          <ProductList zapas={productosFiltrados} inputText={searchInput} />
        ) : (
          <>
            {zapas ? (
              <ProductList zapas={zapas.products} />
            ) : (
              <Container
                component="main"
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <Box style={{ fontSize: 50 }}>LOADING...</Box>
              </Container>
            )}
          </>
        )}
      </>
    );
  } else {
    return <NotLoggin />;
  }
}

export default Product;

/*





*/
