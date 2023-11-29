import React from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Container
} from "@mui/material";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Readme from "../rotas/Readme";
import Contato from "../rotas/Contato";
import Sugest from "../rotas/Sugest";

// Componente principal
function Sobre({ setShowForm }) {
  const buttonStyle = {
    marginRight: "18px"
  };
  return (
    <div>
      <Paper>
        <Router>
          <div>
            <header>
              <h1>Sobre:</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/readme">Manual</Link>
                  </li>
                  <li>
                    <Link to="/contato">Contato</Link>
                  </li>
                  <li>
                    <Link to="/sugest">Sugestões e Reclamações</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <Routes>
              <Route path="/readme" element={<Readme />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sugest" element={<Sugest />} />
              {/*Rotas adicionadas */}
            </Routes>
          </div>
        </Router>
      </Paper>

      <Button
        variant="contained"
        onClick={() => setShowForm(3)}
        style={buttonStyle}
      >
        Voltar
      </Button>
    </div>
  );
}

export default Sobre;
