import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./SessionContext";
import {
  chargeByUsername,
  chargeAllProducts,
  addStockService,
  deleteStockService,
  updateStockService,
} from "../Services/Stock.services";

export const StockContext = createContext();

export function StockProvider({ children }) {
  const [stock, setStock] = useState();
  const { getToken } = useAuth();

  const ChargeStockByUser = async () => {
    const browserToken = await getToken();
    const chargeStock = await chargeByUsername(browserToken);

    setStock(chargeStock);
    return chargeStock;
  };

  const chargeAllMarket = async () => {
    const browserToken = await getToken();
    const products = await chargeAllProducts(browserToken);
    return products;
  };

  const addStock = async (SKU, talla, precio) => {
    const browserToken = await getToken();
    const stockAdded = await addStockService(SKU, talla, precio, browserToken);

    return stockAdded;
  };

  const deleteStock = async (_id) => {
    const browserToken = await getToken();
    const deletedStock = await deleteStockService(browserToken, _id);
  };

  const updatePrices = async (SKU) => {
    const browserToken = await getToken();
    const updatedPrices = await updateStockService(browserToken, SKU);
  };

  const StockContextValue = {
    deleteStock,
    ChargeStockByUser,
    chargeAllMarket,
    addStock,
    updatePrices,
    stock,
  };

  return (
    <StockContext.Provider value={StockContextValue}>
      {children}
    </StockContext.Provider>
  );
}

export function useStock() {
  return useContext(StockContext);
}
