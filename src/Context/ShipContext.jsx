import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./SessionContext";
import { addShips,chargeShips,deleteShips,fetchId,getData } from "../Services/Ship.services";

export const ShipContext = createContext();

export function ShipProvider({ children }) {
  const [ships, setShips] = useState();
  const { getToken } = useAuth();

  const AddShipsByUser = async (
    shipName,
    shipTrack,
    slug,
    shipDestino,
    shipOrigen,
    shipCpostal,
    shipFenvio
  ) => {
    const browserToken = await getToken();

    const addShip = await addShips(
      browserToken,
      shipName,
      shipTrack,
      slug,
      shipDestino,
      shipOrigen,
      shipCpostal,
      shipFenvio
    );
    console.log(addShip)
    //return addShip;
  };

  const ChargeShipsByUser = async () => {
    const browserToken = await getToken();
    const chargeShip = await chargeShips(browserToken);
    //console.log(chargeShip)
    setShips(chargeShip);
    return chargeShip;
  };

  const  DeleteShipByUser= async (_id) => {
    const browserToken = await getToken();
    const deleteShip = await deleteShips(browserToken,_id)
    return deleteShip
  }
  

  const  fetchAPI = async (_id) => {
    const browserToken = await getToken();
    const fetch = await fetchId(browserToken,_id)
    return fetch
  }

  const  getShip = async (_id) => {
    const browserToken = await getToken();
    const fetch = await getData(browserToken,_id)
    return fetch
  }


  const ShipContextValue = {
    ships,
    AddShipsByUser,
    ChargeShipsByUser,
    DeleteShipByUser,
    fetchAPI,
    getShip
  };



  return (
    <ShipContext.Provider value={ShipContextValue}>
      {children}
    </ShipContext.Provider>
  );
}

export function useShip() {
  return useContext(ShipContext);
}
