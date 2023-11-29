import React from "react";
import { Paper, Typography } from "@mui/material";

function Sugest({ setShowForm }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom style={{ margin: "16px" }}>
        Sugestõs e Reclamações:
      </Typography>
      <p style={{ margin: "16px" }}>Envie para o e-mail:</p>
      <p style={{ margin: "16px" }}>washingtonaraujo@souunilavras.com</p>
    </div>
  );
}
export default Sugest;
