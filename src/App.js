import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pagini/Home";
import NavigationBar from "./componente/Meniu";
import RetetaDetail from "./pagini/DetaliiRetete";
import Retete from "./pagini/Retete";
import DespreNoi from "./pagini/DespreNoi";
import Favorite from "./pagini/Favorite";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<DespreNoi />} />
        <Route path="/retete" element={<Retete />} />
        <Route path="/retete/:id" element={<RetetaDetail />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
