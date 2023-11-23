import { Box, Button, TextField } from "@mui/material";
import { useStock } from "../../Context/StockContext";
import AddIcon from "@mui/icons-material/Add";
import companies from "../Information/companiesJ.json";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import { ShipContext } from "../../Context/ShipContext";

const AddShipForm = ({ AddShipsByUser }) => {
  const [slug, setSlug] = useState("");
  const name = "";
  const track = "";
  const destino = "";
  const origen = "";
  const cPostal = "";
  const fEnvio = "";

  const handleChange = (event) => {
    setSlug(event.target.value);
  };

  const getCompanyBySlug = (slug) => {
    return companies.find((company) => company.slug === slug);
  };

  const handleShip = async (event) => {
    event.preventDefault();

    const shipName =
      name || document.getElementById("name")?.value || undefined;
    const shipTrack =
      track || document.getElementById("track")?.value || undefined;
    const shipDestino =
      destino || document.getElementById("destino")?.value || undefined;
    const shipOrigen =
      origen || document.getElementById("origen")?.value || undefined;
    const shipCpostal =
      cPostal || document.getElementById("cPostal")?.value || undefined;
    const shipFenvio =
      fEnvio || document.getElementById("fEnvio")?.value || undefined;

    try {
      const ship = await AddShipsByUser(
        shipName,
        shipTrack,
        slug,
        shipDestino,
        shipOrigen,
        shipCpostal,
        shipFenvio
      );
      window.location.reload();
    } catch (error) {
      console.error("Error al agregar el envio:", error);
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel>Slug *</InputLabel>
        <Select value={slug} onChange={handleChange} label="Slug" required>
          <MenuItem>Slug*</MenuItem>
          {companies.map((item) => (
            <MenuItem key={item.slug} value={item.slug}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        margin="normal"
        required
        id="name"
        type="text"
        label="Name"
        name="name"
        autoFocus
        sx={{ margin: 1 }}
      />
      <TextField
        margin="normal"
        required
        type="text"
        id="track"
        label="Tracking Number"
        name="track"
        autoFocus
        sx={{ margin: 1 }}
      />
      {slug && getCompanyBySlug(slug).destino == true && (
        <TextField
          margin="normal"
          required
          type="text"
          id="destino"
          label="Destination"
          name="destino"
          autoFocus
          sx={{ margin: 1 }}
        />
      )}

      {slug && getCompanyBySlug(slug).origen == true && (
        <TextField
          margin="normal"
          required
          type="text"
          id="origen"
          label="Origin"
          name="origin"
          autoFocus
          sx={{ margin: 1 }}
        />
      )}

      {slug && getCompanyBySlug(slug).codPostal == true && (
        <TextField
          margin="normal"
          required
          type="number"
          id="cPostal"
          label="Postal Code"
          name="pCode"
          autoFocus
          sx={{ margin: 1 }}
        />
      )}

      {slug && getCompanyBySlug(slug).fEnvio == true && (
        <TextField
          margin="normal"
          required
          type="Date"
          id="fEnvio"
          label="Ship date"
          name="dOShipment"
          autoFocus
          sx={{ margin: 1 }}
        />
      )}

      <Button sx={{ border: 1, margin: 1 }}>
        <AddIcon onClick={handleShip} style={{ fontSize: 40 }} />
      </Button>
    </Box>
  );
};
export default AddShipForm;

/*




*/
