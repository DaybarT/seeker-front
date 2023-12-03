import { Box, Button, TextField } from "@mui/material";
import { useStock } from "../../Context/StockContext";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Error from "../../Error/Error";



const AddStockForm = ({ addStock,ChargeStockByUser }) => {

  const [errorState, setErrorState] = useState();

  const handleAddStock = async (event) => {
    event.preventDefault();
    const SKU = document.getElementById("SKU").value;
    const talla = document.getElementById("talla").value;
    const precio = document.getElementById("precio").value;
    try {
      
      await addStock(SKU, talla, precio); // Lógica para agregar el stock
      ChargeStockByUser()
      setErrorState()
      //window.location.reload();

    } catch (error) {
      
      setErrorState(error.message);

    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        id="SKU"
        label="SKU"
        name="SKU"
        autoFocus
        sx={{ margin: 1 }}
      />
      <TextField
        margin="normal"
        required
        id="talla"
        label="Size"
        name="talla"
        autoFocus
        sx={{ margin: 1 }}
      />
      <TextField
        margin="normal"
        required
        id="precio"
        label="Price"
        name="precio"
        autoFocus
        sx={{ margin: 1 }}
      />
      <Button sx={{ border: 1, margin: 1 }}>
        <AddIcon onClick={handleAddStock} style={{ fontSize: 40 }} />
      </Button>
      {errorState && <Error>{errorState}</Error>}
    </Box>
  );
};
export default AddStockForm;
