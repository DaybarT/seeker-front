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

  return (
    <>
      <TableCell align="center">{name.toUpperCase()}</TableCell>
      <TableCell align="center">{track}</TableCell>
      <TableCell align="center">{slug.toUpperCase()}</TableCell>
      <TableCell align="center">
        {((origen && destino) || fEnvio || cPostal) && (
          <Button onClick={handleOpen}>OTHER DATA</Button>
        )}
        <Box component="form" onSubmit={handleSubmit}>
          <Button
            type="submit"
            size="small"
            onClick={() => handleAction("deleteTrack")}
            sx={{ padding: 1 }}
          >
            <DeleteIcon fontSize="small" />
            {/* eliminar el envio de la bbdd y de la api */}
          </Button>
          {!isSended && !idAfterShip && (
            <>
              <Button
                type="submit"
                size="small"
                sx={{ padding: 1 }}
                onClick={() => handleAction("goTrack")}
              >
                <PlayArrowIcon fontSize="small" />
              </Button>
            </>
          )}
        </Box>
      </TableCell>

      <TableCell align="center">
        {isSended && idAfterShip && (
          <Box
            component="form"
            onClick={() => handleAction("getDetails")}
            onSubmit={handleSubmit}
          >
            <Button type="submit" size="small" sx={{ padding: 1 }}>
              <ManageSearchIcon fontSize="small" />
            </Button>
          </Box>
        )}
      </TableCell>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} display={"flex"}>
          <Typography sx={{ paddingTop: 2 }} color="text.secondary">

            {dataShip &&
              dataShip.map((item, index) => (
                <div key={index}>
                  <p><b>{item.location}</b> : <u>{item.message}</u></p>
                  
                </div>
              ))}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default ShipCard;
