import React from "react";
import ShipCard from "./ShipCard";
import { Skeleton } from "@mui/material";
import { TableRow } from "@mui/material";

const ShipList = ({ ships }) => {
  console.log(ships)
  return (
    <>
      {ships.ships.map((ship, index) => (
        <TableRow key={ship._id}>
          <ShipCard
            name={ship.name}
            track={ship.track}
            slug={ship.slug}
            destino={ship.destino}
            origen={ship.origen}
            cPostal={ship.cPostal}
            fEnvio={ship.fEnvio}
            _id={ship._id}
            isSended={ship.isSended}
            idAfterShip={ship.idAfterShip}
            
          />
        </TableRow>
      ))}
    </>
  );
};

export default ShipList;
