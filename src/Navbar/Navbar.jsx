import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/SessionContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HomeIcon from "@mui/icons-material/Home";
import {
  Card,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Button,
  IconButton
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

/*
 <InventoryIcon style={{ fontSize: 30 }} className="link" />
 <PriceCheckIcon style={{ fontSize: 30 }} className="link" />
  <LocalShippingIcon style={{ fontSize: 30 }} className="link" />
  <PowerSettingsNewIcon style={{ fontSize: 30 }} className="link" />

*/

export default function Navbar() {
  const { isLoggedIn, handleLogout } = useAuth();

  if (isLoggedIn) {
    return (
      <>
        <TableContainer
          sx={{ display: "flex", flexWrap: "wrap", position: "sticky" }}
        >
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <NavLink to="/Home">
                    <Button>
                      <HomeIcon style={{ fontSize: 30 }} className="link" />
                    </Button>
                  </NavLink>
                </TableCell>
                <TableCell align="center">
                  <NavLink to="/Stock">
                    <Button>
                      <InventoryIcon
                        style={{ fontSize: 30 }}
                        className="link"
                      />
                    </Button>
                  </NavLink>
                </TableCell>
                <TableCell align="center">
                  <NavLink to="/Market">
                    <Button>
                      <PriceCheckIcon
                        style={{ fontSize: 30 }}
                        className="link"
                      />
                    </Button>
                  </NavLink>
                </TableCell>
                <TableCell align="center">
                  <NavLink to="/Ship">
                    <Button>
                      <LocalShippingIcon
                        style={{ fontSize: 30 }}
                        className="link"
                      />
                    </Button>
                  </NavLink>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={handleLogout}>
                    <PowerSettingsNewIcon
                      style={{ fontSize: 30 }}
                      className="link"
                    />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <IconButton
          size="small"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "10px",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </>
    );
  }
}
