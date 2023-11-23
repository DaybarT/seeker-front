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
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Link to="/Stock">
                      <Card
                        style={{
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <InventoryIcon style={{ fontSize: 80 }} />
                      </Card>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/Market">
                      <Card
                        style={{
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PriceCheckIcon style={{ fontSize: 80 }} />
                      </Card>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/Ship">
                      <Card
                        style={{
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <LocalShippingIcon style={{ fontSize: 80 }} />
                      </Card>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
  }
}
