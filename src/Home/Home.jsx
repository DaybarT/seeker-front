import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Button,
  Avatar,
} from "@mui/material";
import { useAuth } from "../Context/SessionContext";
import CssBaseline from "@mui/material/CssBaseline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import WarningIcon from '@mui/icons-material/Warning';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const { handleLogin, isLoggedIn, user, handleLogout, authenticateUser } =
    useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn && user) {
    return (
      <>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 0,
          }}
        >
          <Link to="/ManageAccount">
            <Card
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button>
                <ManageAccountsIcon style={{ fontSize: 80 }} className="link" />
              </Button>
            </Card>
          </Link>
          DATOS DE USUARIO
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br />
          <Grid
            container
            spacing={3}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={8}>
              <Item>
                <Card
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InventoryIcon style={{ fontSize: 50 }} /> <p style={{ fontSize: 20 }}> - INVENTORY</p>
                </Card>
                <br />
                THIS SECTION IS FOR LISTING THE STOCK YOU HAVE AT HOME. WHEN THE
                ITEM ARRIVES, TAKE THE SHOEBOX, IDENTIFY ITS UNIQUE UNIVERSAL
                CODE, AND INPUT IT ALONG WITH THE SIZE AND THE PRICE YOU
                ACQUIRED. IN THIS SECTION, YOU'LL BE ABLE TO OBSERVE THE CURRENT
                PRICES, AND IF BY ANY CHANCE THEY ARE NOT UP TO DATE, YOU CAN
                UPDATE THEM YOURSELF.
                TRY TO HAVE EVERYTHING REGISTERED BECAUSE LOCAL STORES COULD MAKE YOU AN OFFER.
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <Card
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PriceCheckIcon style={{ fontSize: 50 }} /> <p style={{ fontSize: 20 }}> - MARKET</p>
                </Card>
                <br />
                HERE, YOU'LL BE ABLE TO SEE ALL THE PRODUCTS AVAILABLE IN THE
                MARKET, THEIR SELLING PRICES, AND WHO KNOWS, YOU MIGHT JUST FALL
                IN LOVE WITH A PAIR OF SHOES. INCLUDE A SEARCH BAR FOR QUICKER
                SEARCHES.
                IN THIS SECTION, STORES CAN SEE THE STOCK OF MEMBERS OF THE APPLICATION FOR AN URGENT PURCHASE.
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Card
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocalShippingIcon style={{ fontSize: 50 }} /> <p style={{ fontSize: 20 }}> - SHIPS</p>
                </Card>
                <br />
                THANKS TO AFTERSHIP IN THIS SECTION, YOU'LL SEE THE CURRENT
                LOCATION AND THE ROUTE YOUR ITEM HAS TAKEN ONCE IT'S BEEN
                SHIPPED. WE PROVIDE TRACKING FOR THE MOST COMMONLY USED
                COMPANIES IN THE EUROPEAN AND SPANISH MARKETS. THIS IS CRUCIAL,
                ESPECIALLY IF YOU'VE PURCHASED SOMETHING OF SIGNIFICANT VALUE.
                IT ALLOWS US TO DETECT ANY SUSPICIOUS ACTIONS BY THE DELIVERY
                PERSONNEL.
              </Item>
            </Grid>
          </Grid>
          <br />
          <Grid container xs={8}>
            <Grid item>
              <Item>
                <Card
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WarningIcon style={{ fontSize: 50 }} /> <p style={{ fontSize: 20 }}> - LEGAL NOTICE</p>
                </Card>
                <br />
                <b>
                  THE CREATOR OF THE APPLICATION RESERVES THE RIGHT OF ADMISSION
                </b>
                ,ESPECIALLY IF THERE'S MISUSE OF THE STOCK AND SHIP SECTIONS.
                PLEASE NOTE THAT ALL INFORMATION IS EXTRACTED FROM EXTERNAL
                WEBSITES OR APIS. AS A COMMUNITY, WE NEED TO KEEP THE
                APPLICATION RUNNING; IF THERE'S MISUSE, THE IP MAY BE BANNED.
                <br />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
/*
 <Avatar>
                          <img src="src/assets/aftership.jpg" height={44} />
                        </Avatar> here you'll be able to track your shipments!
*/
/*
 

*/
