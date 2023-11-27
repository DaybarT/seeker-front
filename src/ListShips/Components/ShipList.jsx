import React from "react";
import ShipCard from "./ShipCard";
import { Skeleton } from "@mui/material";
import { TableRow } from "@mui/material";
import { Grid } from "@mui/material";
import {Box} from "@mui/material";

const ShipList = ({ ships }) => {
  console.log(ships);
  return (
    <>
      {ships.ships.map((ship, index) => (
        <Box
        key={ship._id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <Grid sx={{ paddingTop: 10 }} container >
            <ShipCard
              name={ship.name}
              track={ship.track}
              slug={ship.slug}
              _id={ship._id}
              isSended={ship.isSended}
              idAfterShip={ship.idAfterShip}
            />
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default ShipList;
