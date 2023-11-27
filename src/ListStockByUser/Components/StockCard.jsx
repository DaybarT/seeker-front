import React from "react";
import { Card, Box, Typography, IconButton, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";
import style from "../../Styles/ModalStyle";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStock } from "../../Context/StockContext";
import { useShip } from "../../Context/ShipContext";
// const StockCard = ({ SKU,precio,talla,model,img,sizeprice }) => {

const StockCard = ({
  _id,
  index,
  SKU,
  precio,
  talla,
  model,
  img,
  sizePrices,
  Fecha,
}) => {
  const { deleteStock, updatePrices, ChargeStockByUser } = useStock();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [refreshStockValue, setRefreshStockValue] = useState(null);
  const [deleteStockValue, setDeleteStockValue] = useState(null);
  const { DeleteShipByUser } = useShip();

  const handleRefreshClick = (value) => {
    setRefreshStockValue(value);
  };

  const handleDeleteClick = (value) => {
    setDeleteStockValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(refreshStockValue);
    console.log(deleteStockValue);

    if (refreshStockValue) {
      const SKU = refreshStockValue;
      try {
        await updatePrices(SKU);
        ChargeStockByUser()
        //window.location.reload();
      } catch (error) {
        console.error("Error al refrescar precios:", error);
      }
    }
    if (deleteStockValue) {
      const _id = deleteStockValue;
      try {
        await deleteStock(_id); // Lógica para eliminar el stock
        ChargeStockByUser()
        //window.location.reload();
      } catch (error) {
        console.error("Error al eliminar el stock:", error);
      }
    }
  };

  return (
    <Card
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        margin: "10px",
      }}
      key={index}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={img} width={250} />

        <Typography
          component="div"
          variant="body1"
          fontWeight="bold"
          sx={{ overflowWrap: "break-word" }} // Permitir salto de línea
        >
          {model.split(" ").map((word, index) =>
            index === 3 ? (
              <React.Fragment key={index}>
                <br />
                {word}
              </React.Fragment>
            ) : (
              <span key={index}>{word + " "}</span>
            )
          )}

          {/* {model} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SKU: {SKU}
        </Typography>

        <Typography variant="body2" color="text.primary">
          {talla} EU | {precio} €
        </Typography>
        <Button onClick={handleOpen}>VIEW PRICES</Button>
        <div>
          <Box component="form" onSubmit={handleSubmit}>
            <Button
              type="submit"
              size="small"
              sx={{ padding: 1 }}
              onClick={() => handleRefreshClick(SKU)}
            >
              <RefreshIcon fontSize="small" />
            </Button>
            <Button
              type="submit"
              size="small"
              sx={{ padding: 1 }}
              onClick={() => handleDeleteClick(_id)}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </Box>
        </div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            {sizePrices.map((item) => (
              <Button
                key={item.talla}
                className="size-price-button"
                sx={{ border: 1 }}
              >
                {item.talla} EU
                <br />
                {item.precio ? item.precio+"€" : "-"} 
              </Button>
            ))}
            <br />
            <Typography sx={{ paddingTop: 2 }} color="text.secondary">
              Scrapped at {Fecha}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Card>
  );
};
export default StockCard;
