import React from "react";
import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  IconButton,
  Divider,
  Chip,
  Switch,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import style from "../../Styles/ModalStyle";
import Modal from "@mui/material/Modal";

// const StockCard = ({ SKU,precio,talla,model,img,sizeprice }) => {

const ProductCard = ({ SKU, Fecha, model, img, sizePrices }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        margin: "10px"
      }}
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
          SKU:{SKU}
        </Typography>
        <Button onClick={handleOpen}>VIEW PRICES</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            {sizePrices.map((item) => (
              <Button
                key={item.talla}
                className="size-price-button"
                sx={{ border: 1 }}
              >
                {item.talla}
                <br />
                {item.precio ? item.precio : "-"}
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
export default ProductCard;
