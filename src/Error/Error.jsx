import { red } from "@mui/material/colors";
import * as React from "react";

export default function Error({ children }) {
  return (
    <div>
      <p style={{ fontSize: 20, color: red[500] }}>{children}</p>
    </div>
  );
}
