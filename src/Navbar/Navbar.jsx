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
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useState } from "react";
import { useEffect } from "react";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
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
        <Grid container spacing={1} sx={{ justifyContent: "center", '& button': { p: 1 }  }}>
          <Grid item>
            <Item>
              <NavLink to="/Home">
                <Button size="small">
                  <HomeIcon style={{ fontSize: 30 }} className="link" />
                </Button>
              </NavLink>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <NavLink to="/Stock">
                <Button size="small">
                  <InventoryIcon style={{ fontSize: 30 }} className="link" />
                </Button>
              </NavLink>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <NavLink to="/Market">
                <Button size="small">
                  <PriceCheckIcon style={{ fontSize: 30 }} className="link" />
                </Button>
              </NavLink>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <NavLink to="/Ship">
                <Button size="small">
                  <LocalShippingIcon
                    style={{ fontSize: 30 }}
                    className="link"
                  />
                </Button>
              </NavLink>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Button onClick={handleLogout} size="small">
                <PowerSettingsNewIcon
                  style={{ fontSize: 30 }}
                  className="link"
                />
              </Button>
            </Item>
          </Grid>
        </Grid>
      </>
    );
  }
}

/*

*/
