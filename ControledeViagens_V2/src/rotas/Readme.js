import React from "react";
import { Paper, Typography } from "@mui/material";

function Readme({ setShowForm }) {
  // Renderização da página
  return (
    <div>
      <Typography variant="h6" gutterBottom style={{ margin: "16px" }}>
        Manual:
      </Typography>
      <p style={{ margin: "16px" }}>
        Este aplicativos é usado para agendar viagens
      </p>
      <p style={{ margin: "16px" }}>
        Na tela incial, clique no botão adicionar para{" "}
      </p>
      <p style={{ margin: "16px" }}>agendar uma nova viagem.</p>
      <p style={{ margin: "16px" }}>
        Clique no botão Excluir para excluir a viagem selecionada.
      </p>
    </div>
  );
}

export default Readme;
