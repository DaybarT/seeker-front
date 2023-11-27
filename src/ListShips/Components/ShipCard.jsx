import { useState } from "react";
import style from "../../Styles/ModalStyle";
import Modal from "@mui/material/Modal";
import React from "react";
import {
  Card,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useShip } from "../../Context/ShipContext";
import { Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ShipCard = ({
  name,
  track,
  slug,
  destino,
  origen,
  cPostal,
  fEnvio,
  _id,
  isSended,
  idAfterShip,
}) => {
  const { DeleteShipByUser, fetchAPI, getShip } = useShip();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDataShip("");
  };
  const [dataShip, SetDataShip] = useState("");

  const [actionType, setActionType] = useState(null);

  const handleAction = (action) => {
    setActionType(action);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (actionType === "goTrack") {
      console.log("TRACKEO " + _id);
      const data = await fetchAPI(_id);
      window.location.reload();
      // Lógica para manejar la acción de goTrack
    }

    if (actionType === "deleteTrack") {
      //console.log("ELIMINO "+_id)
      const data = await DeleteShipByUser(_id);
      window.location.reload();
    }

    if (actionType === "getDetails") {
      const data = await getShip(_id);
      console.log(data);
      SetDataShip(data.result.tracking.checkpoints);
      console.log(dataShip);
      handleOpen();

      // Lógica para manejar la acción de goTrack
    }
  };

  //AGREGA EL ITEM
  return (
    <>
      <Grid item xs>
        <Item>NAME TRACK: {name.toUpperCase()}</Item>
      </Grid>
      <Grid item xs>
        <Item>TRACKING NUMBER: {track}</Item>
      </Grid>
      <Grid item xs>
        <Item>SHIPPING COMPANIES: {slug.toUpperCase()}</Item>
      </Grid>
      <Grid item xs>
        <Item>
          MORE ACTIONS:
   
          <Box component="form" onSubmit={handleSubmit}>
  
            <Button
              type="submit"
              size="small"
              onClick={() => handleAction("deleteTrack")}
             
            >
              <DeleteIcon fontSize="small" />
              {/* eliminar el envio de la bbdd y de la api */}
            </Button>
  
            {!isSended && !idAfterShip && (
              <>
                <Button
                  type="submit"
                  size="small"
                 
                  onClick={() => handleAction("goTrack")}
                >
                  <PlayArrowIcon fontSize="small" />
                </Button>
              </>
            )}
          </Box>
        </Item>
      </Grid>
      {isSended && idAfterShip && (
        <Grid item xs>
          <Item>
            STATE:
            <Box
              component="form"
              onClick={() => handleAction("getDetails")}
              onSubmit={handleSubmit}
            >
              <Button type="submit" size="small" sx={{ padding: 1 }}>
                <ManageSearchIcon fontSize="small" />
              </Button>
            </Box>
          </Item>
        </Grid>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box sx={style} display={"flex"}>
          <Typography sx={{ paddingTop: 2 }} color="text.secondary">
            {dataShip &&
              dataShip.map((item, index) => (
                <div key={index}>
                  <p>
                    <b>{item.location}</b> : <u>{item.message}</u>
                  </p>
                </div>
              ))}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default ShipCard;
