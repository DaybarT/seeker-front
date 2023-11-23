import ProductList from "./Components/ProductList";
import { useStock } from "../Context/StockContext";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/SessionContext";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
//te va a tocar pasar el toquen o el user.username para que el back entienda de alguna manera
//que quieres ver tu stock, y necesita ese parametro...
import { TextField } from "@mui/material";

function Product() {
  const { handleLogin, isLoggedIn, user, handleLogout, authenticateUser } =
    useAuth();
  const { chargeAllMarket } = useStock();
  const [zapas, setZapas] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchZapas = async () => {
      try {
        const data = await chargeAllMarket();

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
      // Filtrar por el campo 'model'
      return producto.model.toLowerCase().includes(searchInput.toLowerCase());
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
          sx={{margin:1}}
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
  }
}

export default Product;

/*





*/
