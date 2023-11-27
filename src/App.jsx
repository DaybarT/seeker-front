import React from "react";
import { AuthProvider } from "./Context/SessionContext.jsx";
import { StockProvider } from "./Context/StockContext.jsx";
import SignIn from "./LogIn/LogIn.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import ManageAccount from "./ManageAccount/ManageAccount.jsx";
import NotFound from "./NotFound/NotFound.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Register from "./Register/Register.jsx";
import Stock from "./ListStockByUser/Stock.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Product from "./ListProducts/Products.jsx";
import ForgotPassword from "./ForgotPassword/ForgotPassword.jsx";
import ChangePass from "./ForgotPassword/ChangePass.jsx";
import Ship from "./ListShips/Ship.jsx";
import { ShipProvider } from "./Context/ShipContext.jsx";
import Footer from "./Footer/Footer.jsx";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AuthProvider>
            <StockProvider>
              <ShipProvider>
                <Navbar />
                <Routes>
                  <Route path="/ForgotPassword" element={<ForgotPassword />} />
                  <Route path="/ChangePass" element={<ChangePass />} />
                  <Route path="/" element={<SignIn />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/ManageAccount" element={<ManageAccount />} />
                  <Route path="/Stock" element={<Stock />} />
                  <Route path="/Market" element={<Product />} />

                  <Route path="/Ship" element={<Ship />} />

                  <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer/>
              </ShipProvider>
            </StockProvider>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
