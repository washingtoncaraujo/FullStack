import React from "react";
import { Paper, Typography } from "@mui/material";

function Contato({ setShowForm }) {
  // Renderização da página
  return (
    <div>
      <Typography variant="h6" gutterBottom style={{ margin: "16px" }}>
        Desenvolvedor:
      </Typography>
      <p style={{ margin: "16px" }}>Washington Carlos Araújo</p>
      <p style={{ margin: "16px" }}>Tel: (35) 9 9988-6691 </p>
    </div>
  );
}
export default Contato;
